import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './layout/top-bar/top-bar.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {ContentComponent} from './layout/content/content.component';
import {LoginRequiredComponent} from './wildcard/login-required/login-required.component';
import {PageNotFoundComponent} from './wildcard/page-not-found/page-not-found.component';
import {PageComponent} from './component/page/page.component';
import {LoginPageComponent} from './authorization/pages/login-page/login-page.component';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent} from './authorization/components/login-form/login-form.component';
import {ValidationMsgComponent} from './component/validation-msg/validation-msg.component';
import {StatementComponent} from './component/statement/statement.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./configuration/http/error.interceptor";
import { UserSectionComponent } from './layout/user-section/user-section.component';
import { RegistrationPageComponent } from './authorization/pages/registration-page/registration-page.component';
import { RegistrationFormComponent } from './authorization/components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContentComponent,
    LoginRequiredComponent,
    PageNotFoundComponent,
    PageComponent,
    LoginPageComponent,
    NavBarComponent,
    LoginFormComponent,
    ValidationMsgComponent,
    StatementComponent,
    UserSectionComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
