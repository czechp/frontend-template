import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {UserHttpService} from "../../services/user-http.service";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent {
  user$: Observable<UserModel>;
  private readonly userId: number;
  index = 3;
  constructor(private activatedRoute: ActivatedRoute, private userHttpService: UserHttpService) {
    this.userId = this.activatedRoute.snapshot.params["id"];
    this.user$ = this.userHttpService.getUser(this.userId);
  }
}
