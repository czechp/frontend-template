import {Injectable} from '@angular/core';
import {AuthorizationModel} from "./AuthorizationModel";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {LoginAction, LogoutAction} from "../store/authorization/authorization.actions";

export interface UserCredentials {
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

  constructor(private store: Store<AppState>) {
    this.determineStateOfLogin();
  }

  login(authorizationModel: AuthorizationModel) {
    const authorizationHash = this.hashCredentials(authorizationModel);
    const {login, email, role} = authorizationModel;
    const userCredentials: UserCredentials = {authorizationHash, login, email, role};
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(userCredentials));
    this.store.dispatch(new LoginAction(userCredentials));
  }

  isLogged() {
    return !!localStorage.getItem(this.STORAGE_NAME);
  }

  logout() {
    localStorage.removeItem(this.STORAGE_NAME);
    this.store.dispatch(new LogoutAction());
  }

  getRole() {
    const userCredentials = this.readCredentials();
    return userCredentials?.role;
  }

  getAuthorizationHash() {
    return this.readCredentials()?.authorizationHash;
  }

  private hashCredentials(authorizationModel: AuthorizationModel) {
    return window.btoa(`${authorizationModel.login}:${authorizationModel.password}`);
  }

  private readCredentials(): UserCredentials | null {
    const credentialsJson = localStorage.getItem(this.STORAGE_NAME);
    if (credentialsJson) {
      return JSON.parse(credentialsJson) as UserCredentials;
    }
    return null;
  }

  private determineStateOfLogin() {
    if (this.isLogged()) {
      this.store.dispatch(new LoginAction(this.readCredentials() as UserCredentials));
    }
  }
}
