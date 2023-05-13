import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../forms/login.form";
import {StatementService} from "../../../service/statement.service";
import {LoginModel} from "../../models/login.model";
import {ValidationMessages} from "../../../configuration/ValidationMessages";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  @Output()
  formSubmitted: EventEmitter<LoginModel> = new EventEmitter<LoginModel>();
  protected readonly ValidationMessages = ValidationMessages;

  constructor(private statementService: StatementService) {
    this.loginForm = new FormGroup<LoginForm>({
      login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  submitForm() {
    if (!this.loginForm.valid)
      this.statementService.dataNotCorrect();
    else
      this.formSubmitted.emit({
        login: this.loginForm.get("login")?.value,
        password: this.loginForm.get("password")?.value
      });
  }
}
