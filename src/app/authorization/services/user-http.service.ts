import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {BACKEND_URL} from "../../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<UserModel[]>(`${BACKEND_URL}/users`);
  }

  getUser(userId: number) {
    return this.httpClient.get<UserModel>(`${BACKEND_URL}/users/${userId}`);
  }

  removeUser(userId: number) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/users/${userId}`)
  }
}
