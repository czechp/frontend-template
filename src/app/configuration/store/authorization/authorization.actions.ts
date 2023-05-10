import {Action} from "@ngrx/store";
import {UserCredentials} from "../../authorization/authorization.service";

export enum AuthorizationActions {
  LOGIN = "[Authorization] Login",
  LOGOUT = "[Authorization] Logout"
}

export class LoginAction implements Action {
  readonly type = AuthorizationActions.LOGIN;

  constructor(public payload: UserCredentials) {
  }
}

export class LogoutAction implements Action {
  readonly type = AuthorizationActions.LOGOUT;

  constructor() {
  }
}
