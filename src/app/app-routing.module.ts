import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home/home-page/home-page.component";
import {PageNotFoundComponent} from "./wildcard/page-not-found/page-not-found.component";
import {LoginRequiredComponent} from "./wildcard/login-required/login-required.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "login-required", component: LoginRequiredComponent},
  {path: "not-found", component: PageNotFoundComponent},
  {path: "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
