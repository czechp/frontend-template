import {Injectable} from '@angular/core';
import {VerificationTokenModel} from "../models/verification-token.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class VerificationTokenHttpService {

  constructor(private httpClient: HttpClient) {
  }

  verifyToken(verificationTokenModel: VerificationTokenModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/users/confirm`, verificationTokenModel);
  }
}
