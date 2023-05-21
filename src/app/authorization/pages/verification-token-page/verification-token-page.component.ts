import {Component, OnDestroy} from '@angular/core';
import {VerificationTokenModel} from "../../models/verification-token.model";
import {VerificationTokenHttpService} from "../../services/verification-token-http.service";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-verification-token-page',
  templateUrl: './verification-token-page.component.html',
  styleUrls: ['./verification-token-page.component.css']
})
export class VerificationTokenPageComponent implements OnDestroy {
  private verifyTokenSubscription: Subscription | undefined;

  constructor(private verificationTokenHttpService: VerificationTokenHttpService, private statementService: StatementService, private router: Router) {
  }

  sendVerificationToken(verificationTokenModel: VerificationTokenModel) {
    this.verifyTokenSubscription = this.verificationTokenHttpService.verifyToken(verificationTokenModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Twoje konto zostało potwierdzone. Czekaj na aktywacje administratora");
          this.router.navigate(["/login"]);
        }
      });
  }

  ngOnDestroy(): void {
    this.verifyTokenSubscription?.unsubscribe();
  }


}
