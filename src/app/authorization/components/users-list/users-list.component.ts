import {Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input()
  users: Observable<UserModel[]> | undefined;
}
