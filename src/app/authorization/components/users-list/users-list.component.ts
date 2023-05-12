import {Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input()
  users: Observable<UserModel[]> | undefined;

  constructor(private router: Router) {
  }

  navigateToDetails(id: number) {
    this.router.navigate(["/user-details", id]);
  }
}
