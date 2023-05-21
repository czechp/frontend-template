import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './layout/top-bar/top-bar.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {ContentComponent} from './layout/content/content.component';
import {LoginRequiredComponent} from './wildcard/login-required/login-required.component';
import {PageNotFoundComponent} from './wildcard/page-not-found/page-not-found.component';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./configuration/http/error.interceptor";
import {UserSectionComponent} from './layout/user-section/user-section.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from '@ngrx/store';
import {AuthorizationReducer} from "./configuration/store/authorization/authorization.reducer";
import {AuthorizationModule} from "./authorization/authorization.module";
import {SharedModule} from "./shared.module";
import {ForbiddenComponent} from "./wildcard/forbidden/forbidden.component";
import {AuthorizationInterceptor} from "./configuration/http/authorization.interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContentComponent,
    LoginRequiredComponent,
    PageNotFoundComponent,
    NavBarComponent,
    UserSectionComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthorizationModule,
    SharedModule,
    StoreModule.forRoot({logged: AuthorizationReducer}, {}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
