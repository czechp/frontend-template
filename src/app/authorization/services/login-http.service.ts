import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/login.model";
import {BACKEND_URL} from "../../configuration/URL";

export interface LoginResponse {
  role: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private httpClient: HttpClient) {
  }

  login(loginModel: LoginModel) {
    return this.httpClient.post<LoginResponse>(`${BACKEND_URL}/login`, loginModel);
  }
}

