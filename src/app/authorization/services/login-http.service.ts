import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {LoginModel} from "../models/LoginModel";
import {Observable} from "rxjs";
import {BACKEND_URL} from "../../configuration/URL";

export interface LoginResponse {
    role: string;
    email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) {
    return this.httpClient.post<LoginResponse>(`${BACKEND_URL}/login`, loginModel);
  }
}

