import {Injectable} from '@angular/core';
import {AuthorizationModel} from "./AuthorizationModel";
import {Subject} from "rxjs";

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
  authorizationSubject: Subject<boolean>;
  constructor() {
    this.authorizationSubject = new Subject<boolean>();
    setTimeout(() => {
      this.authorizationSubject.next(this.isLogged());
    }, 500);
  }

  login(authorizationModel: AuthorizationModel) {
    const authorizationHash = this.hashCredentials(authorizationModel);
    const {login, email, role} = authorizationModel;
    const userCredentials: UserCredentials = {authorizationHash, login, email, role};
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(userCredentials));
    this.authorizationSubject.next(true);
  }

  private hashCredentials(authorizationModel: AuthorizationModel) {
    return window.btoa(`${authorizationModel.login}:${authorizationModel.password}`);
  }

  isLogged() {
    return !!localStorage.getItem(this.STORAGE_NAME);
  }

  logout() {
    localStorage.removeItem(this.STORAGE_NAME);
    this.authorizationSubject.next(false);
  }

  getLogin(): string {
    return this.readCredentials().login;
  }

  getEmail(): string {
     return this.readCredentials().email;
  }
  private readCredentials(): AuthorizationModel {
    const userCredentialsJson = localStorage.getItem(this.STORAGE_NAME);
    return JSON.parse(userCredentialsJson as string) as AuthorizationModel;
  }

}
