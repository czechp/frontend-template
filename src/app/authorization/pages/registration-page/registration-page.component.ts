import {Component} from '@angular/core';
import {RegistrationModel} from "../../models/RegistrationModel";
import {RegistrationHttpService} from "../../services/registration-http.service";
import {StatementService} from "../../../service/statement.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private registrationHttpService: RegistrationHttpService, private statementService: StatementService) {
  }

  sendRegistrationRequest(registrationModel: RegistrationModel) {
    console.log(registrationModel)
    this.registrationHttpService.register(registrationModel)
      .subscribe({
        next: () => {
          this.statementService.publishInfo("Rejestracja zakończona. Na Twojego maila został wysłany token werifikacyjny. Wklej go w tym polu");
        }
      });
  }
}
