import {Component} from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  users$: Observable<UserModel[]>;

  constructor(private userHttpService: UserHttpService) {
    this.users$ = this.userHttpService.getUsers();
  }
}
