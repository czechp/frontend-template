import {Component, OnDestroy} from '@angular/core';
import {AuthorizationService, UserCredentials} from "../../configuration/authorization/authorization.service";
import {Router} from "@angular/router";
import {AppState} from "../../configuration/store/app.state";
import {Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnDestroy {
  logged$: Observable<UserCredentials>;
  username: string = "";
  email: string = "";

  constructor(public authorizationService: AuthorizationService, private router: Router, private store: Store<AppState>) {
    this.logged$ = store.select((store) => store.logged)
      .pipe(tap((user) => {
        if (user) {
          this.username = user.login;
          this.email = user.email;
        }
      }));
  }

  logout() {
    this.authorizationService.logout();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
  }
}
