import {Component} from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  constructor(private userHttpService: UserHttpService) {
    this.userHttpService.getUsers().subscribe({
      next: (users) => {
        console.log(users);
      }
    })
  }
}
