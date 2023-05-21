import {Injectable} from '@angular/core';
import {RegistrationModel} from "../models/registration.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class RegistrationHttpService {

  constructor(private httpClient: HttpClient) {
  }

  register(registrationModel: RegistrationModel): Observable<void> {
    return this.httpClient.post<void>(`${BACKEND_URL}/users/register`, registrationModel);
  }
}
