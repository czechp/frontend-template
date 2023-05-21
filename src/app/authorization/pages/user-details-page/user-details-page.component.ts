import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {UserHttpService} from "../../services/user-http.service";
import {StatementService} from "../../../service/statement.service";
import {UserAssignRoleModel} from "../../models/user-assign-role.model";
import {UserActivationModel} from "../../models/user-activation.model";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent {
  user$: Observable<UserModel>;
  private readonly userId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private userHttpService: UserHttpService,
              private statementService: StatementService,
              private router: Router
  ) {
    this.userId = this.activatedRoute.snapshot.params["id"];
    this.user$ = this.userHttpService.getUser(this.userId);
  }

  removeUser(userId: number) {
    this.userHttpService.removeUser(userId)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Użytkownik został usunięty");
          this.router.navigate(["/users"]);
        }
      })
  }

  assignRole(userAssignRoleModel: UserAssignRoleModel) {
    this.userHttpService.assignRole(userAssignRoleModel).subscribe({
      next: () => {
        this.statementService.publicInfo("Rola została zaktualizowana")
      }
    });
  }

  activateUser(userActivationModel: UserActivationModel) {
    this.userHttpService.activateUser(userActivationModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo(`Użytkownik został ${userActivationModel.activation ? "aktywowany" : "dezaktywowany"}`);
        }
      });
  }
}
