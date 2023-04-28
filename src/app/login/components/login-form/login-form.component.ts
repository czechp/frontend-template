import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../forms/login.form";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup<LoginForm>({
      login: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required])
    });
  }

  submitForm() {
    console.log(this.loginForm.get("login")?.hasError("minlength"));
  }

}
