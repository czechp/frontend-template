import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ContentComponent } from './layout/content/content.component';
import { LoginRequiredComponent } from './wildcard/login-required/login-required.component';
import { PageNotFoundComponent } from './wildcard/page-not-found/page-not-found.component';
import { PageComponent } from './component/page/page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContentComponent,
    LoginRequiredComponent,
    PageNotFoundComponent,
    PageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
