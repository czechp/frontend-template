import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {UserActivationModel} from "../../models/user-activation.model";

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.css']
})
export class UserActivationComponent {
  @Input()
  userId: number | undefined;
  @Output()
  formSubmitted = new EventEmitter<UserActivationModel>();

  constructor(private dialog: MatDialog) {
  }

  performActivation(activation: boolean) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: `${activation ? "Aktywacja" : "Dezaktywacja "} użytkownika`,
        content: "",
        confirm: () => {
          this.formSubmitted.emit({userId: this.userId as number, activation})
        }
      }
    })
  }
}
