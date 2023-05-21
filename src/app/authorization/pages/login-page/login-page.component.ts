import {Component, OnDestroy} from '@angular/core';
import {LoginModel} from "../../models/login.model";
import {LoginHttpService} from "../../services/login-http.service";
import {Subscription} from "rxjs";
import {AuthorizationService} from "../../../configuration/authorization/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {
  private loginRequestSubscription: Subscription | undefined;

  constructor(private loginHttpService: LoginHttpService, private authorizationService: AuthorizationService, private router: Router) {
  }

  sendLoginRequest(loginModel: LoginModel) {
    this.loginRequestSubscription = this.loginHttpService.login(loginModel)
      .subscribe({
        next: (response) => {
          this.authorizationService.login({...loginModel, ...response});
          this.router.navigate(["/"]);
        }
      });
  }

  ngOnDestroy(): void {
    this.loginRequestSubscription?.unsubscribe();
  }


}
