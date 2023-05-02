import {Component} from '@angular/core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs";
import {StatementMessage, StatementService} from "../../service/statement.service";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {
  private readonly STATEMENT_SECONDS_DURATION = 3;
  private statementSubscription: Subscription;

  visibility: boolean = false;
  closeIcon = faXmark;
  content: string = "Empty content here";
  isError: boolean = false;

  constructor(private statementService: StatementService) {
    this.statementSubscription = statementService.statementSubject.subscribe({
      next: this.showStatement
    });
  }

  closeWindow() {
    this.visibility = false;
  }

  private showStatement = (message: StatementMessage) => {
    this.visibility = true;
    this.content = message.content;
    this.isError = message.error;
    setTimeout(() => {
      this.closeWindow();
    }, this.STATEMENT_SECONDS_DURATION * 1000);
  }
}
