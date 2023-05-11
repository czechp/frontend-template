import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./component/page/page.component";
import {StatementComponent} from "./component/statement/statement.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {YesOrNoPipe} from "./pipe/yes-or-no.pipe";


@NgModule({
  declarations: [
    PageComponent,
    StatementComponent,
    YesOrNoPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule
  ],
  exports:[
    PageComponent,
    StatementComponent,
    YesOrNoPipe
  ]
})
export class SharedModule {
}
