import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent {
  @Input()
  userId: number | undefined;
  @Output()
  formSubmitted = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  removeOnClick() {
    const dialogData: ConfirmationDialogModel = {
      title: "Potwierdź usunięcie użytkownika",
      content: "",
      confirm: () => this.formSubmitted.emit(this.userId)
    }
    this.dialog.open(ConfirmationDialogComponent, {data: dialogData});
  }
}
