import {Component, OnDestroy} from '@angular/core';
import {AuthorizationService} from "../../configuration/authorization/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnDestroy {
  authorizationService: AuthorizationService;
  constructor(authorizationService: AuthorizationService, private router: Router) {
    this.authorizationService = authorizationService;
  }

  logout() {
    this.authorizationService.logout();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
  }
}
