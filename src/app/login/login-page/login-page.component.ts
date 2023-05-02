import { Component } from '@angular/core';
import {LoginModel} from "../models/LoginModel";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  sendLoginRequest(loginModel: LoginModel){
    console.log(loginModel);
  }
}
