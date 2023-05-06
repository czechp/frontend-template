import {Component, EventEmitter, Output} from '@angular/core';
import {ValidationMessages} from "../../../configuration/ValidationMessages";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationTokenForm} from "../../forms/verification-token.form";
import {VerificationTokenModel} from "../../models/VerificationTokenModel";
import {StatementService} from "../../../service/statement.service";

@Component({
  selector: 'app-verification-token-form',
  templateUrl: './verification-token-form.component.html',
  styleUrls: ['./verification-token-form.component.css']
})
export class VerificationTokenFormComponent {
  protected readonly ValidationMessages = ValidationMessages;
  verificationTokenForm: FormGroup;
  @Output()
  formSubmitted = new EventEmitter<VerificationTokenModel>;

  constructor(private statementService: StatementService) {
    this.verificationTokenForm = new FormGroup<VerificationTokenForm>(
      {verificationToken: new FormControl("", [Validators.required])}
    );
  }

  submitForm() {
    if (this.verificationTokenForm.valid)
      this.formSubmitted.emit({confirmationToken: this.verificationTokenForm.get("verificationToken")?.value});
    else
      this.statementService.dataNotCorrect();
  }

}
