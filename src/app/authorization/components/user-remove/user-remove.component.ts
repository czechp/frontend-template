import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";
import {UserHttpService} from "../../services/user-http.service";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent {
  @Input()
  userId: number | undefined;

  constructor(public dialog: MatDialog, private userHttpService: UserHttpService, private statementService: StatementService, private router: Router) {
  }

  removeOnClick() {
    const dialogData: ConfirmationDialogModel = {
      title: "Potwierdź usunięcie użytkownika",
      content: "",
      confirm: () => {
        this.userHttpService.removeUser(this.userId as number)
          .subscribe({
            next: () => {
              this.statementService.publicInfo("Użytkownik został usunięty");
              this.router.navigate(["/users"]);
            }
          })
      },
    }
    this.dialog.open(ConfirmationDialogComponent, {data: dialogData});
  }
}
