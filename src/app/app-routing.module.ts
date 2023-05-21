import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home/home-page/home-page.component";
import {PageNotFoundComponent} from "./wildcard/page-not-found/page-not-found.component";
import {LoginRequiredComponent} from "./wildcard/login-required/login-required.component";
import {LoginPageComponent} from "./authorization/pages/login-page/login-page.component";
import {LoginGuard} from "./configuration/guards/login.guard";
import {RegistrationPageComponent} from "./authorization/pages/registration-page/registration-page.component";
import {
  VerificationTokenPageComponent
} from "./authorization/pages/verification-token-page/verification-token-page.component";
import {UsersPageComponent} from "./authorization/pages/users-page/users-page.component";
import {ForbiddenComponent} from "./wildcard/forbidden/forbidden.component";
import {AdminGuard} from "./configuration/guards/admin.guard.service";
import {UserDetailsPageComponent} from "./authorization/pages/user-details-page/user-details-page.component";

const routes: Routes = [
  {path: "", component: HomePageComponent, canActivate: [LoginGuard]},
  {path: "login", component: LoginPageComponent},
  {path: "registration", component: RegistrationPageComponent},
  {path: "verification-token", component: VerificationTokenPageComponent},
  {path: "users", component: UsersPageComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: "user-details/:id", component: UserDetailsPageComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: "forbidden", component: ForbiddenComponent},
  {path: "login-required", component: LoginRequiredComponent},
  {path: "not-found", component: PageNotFoundComponent},
  {path: "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
