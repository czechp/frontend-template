import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./component/page/page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {YesOrNoPipe} from "./pipe/yes-or-no.pipe";
import {CustomDatePipe} from "./pipe/custom-date.pipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    PageComponent,
    YesOrNoPipe,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    PageComponent,
    YesOrNoPipe,
    CustomDatePipe
  ]
})
export class SharedModule {
}
