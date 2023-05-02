import {Injectable} from '@angular/core';
import {AuthorizationModel} from "./AuthorizationModel";

interface UserCredentials {
  authorizationHash: string;
  login: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly STORAGE_NAME = "user_credentials";
  constructor() {
  }

  login(authorizationModel: AuthorizationModel) {
    const authorizationHash = window.btoa(`${authorizationModel.login}:${authorizationModel.password}`);
    const {login, email, role} = authorizationModel;
    const userCredentials: UserCredentials = {authorizationHash, login, email, role};
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(userCredentials));
  }

  isLogged() {
    return !!localStorage.getItem(this.STORAGE_NAME);
  }
}
