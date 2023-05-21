import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {BACKEND_URL} from "../../configuration/URL";
import {UserAssignRoleModel} from "../models/user-assign-role.model";
import {share} from "rxjs";
import {UserActivationModel} from "../models/user-activation.model";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<UserModel[]>(`${BACKEND_URL}/users`).pipe(share());
  }

  getUser(userId: number) {
    return this.httpClient.get<UserModel>(`${BACKEND_URL}/users/${userId}`).pipe(share());
  }

  removeUser(userId: number) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/users/${userId}`).pipe(share())
  }

  assignRole(userAssignRoleModel: UserAssignRoleModel) {
    return this.httpClient.patch<void>(`${BACKEND_URL}/users/assign-role/${userAssignRoleModel.userId}`, {}, {params: {role: userAssignRoleModel.role}}).pipe(share());
  }

  activateUser(userActivationModel: UserActivationModel) {
    return this.httpClient.patch<void>(`${BACKEND_URL}/users/confirm-by-admin/${userActivationModel.userId}`, {}, {params: {activation: userActivationModel.activation}});
  }
}
