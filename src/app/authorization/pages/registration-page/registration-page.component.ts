import {Component, OnDestroy} from '@angular/core';
import {RegistrationModel} from "../../models/registration.model";
import {RegistrationHttpService} from "../../services/registration-http.service";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnDestroy {
  private registerRequestSubscription: Subscription | undefined;

  constructor(private registrationHttpService: RegistrationHttpService,
              private statementService: StatementService, private router: Router) {
  }

  sendRegistrationRequest(registrationModel: RegistrationModel) {
    this.registerRequestSubscription = this.registrationHttpService.register(registrationModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Rejestracja zakończona. Na Twojego maila został wysłany token weryfikacyjny. Wklej go w tym polu");
          this.router.navigate(["/verification-token"]);
        }
      });
  }

  ngOnDestroy(): void {
    this.registerRequestSubscription?.unsubscribe();
  }
}
