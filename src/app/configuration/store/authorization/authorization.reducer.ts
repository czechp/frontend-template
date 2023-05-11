import {AuthorizationActions} from "./authorization.actions";
import {UserCredentials} from "../../authorization/authorization.service";

const initState = undefined;

export function AuthorizationReducer(state: UserCredentials | undefined = initState, action: any) {
  switch (action.type) {
    case AuthorizationActions.LOGIN:
      return action.payload;
    case AuthorizationActions.LOGOUT:
      return undefined;
    default:
      return state;
  }
}
