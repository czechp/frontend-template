import {Component, OnDestroy} from '@angular/core';
import {LoginModel} from "../models/LoginModel";
import {LoginHttpService} from "../services/login-http.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy{
  private loginRequestSubscription: Subscription | undefined;

  constructor(private loginHttpService: LoginHttpService) {
  }

  sendLoginRequest(loginModel: LoginModel) {
    this.loginRequestSubscription = this.loginHttpService.login(loginModel)
      .subscribe({
        next: (response) => {
          console.log(response);
        }
      });
  }

  ngOnDestroy(): void {
    this.loginRequestSubscription?.unsubscribe();
  }


}
