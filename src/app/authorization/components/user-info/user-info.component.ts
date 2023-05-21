import {Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input("user")
  user$: Observable<UserModel> | undefined;
}
