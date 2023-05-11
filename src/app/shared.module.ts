import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./component/page/page.component";
import {StatementComponent} from "./component/statement/statement.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    PageComponent,
    StatementComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule
  ],
  exports:[
    PageComponent,
    StatementComponent,
  ]
})
export class SharedModule {
}
