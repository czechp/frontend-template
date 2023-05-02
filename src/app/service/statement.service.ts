import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export interface StatementMessage {
  content: string;
  error: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  statementSubject: Subject<StatementMessage>;

  constructor() {
    this.statementSubject = new Subject<StatementMessage>();
  }

  publishMessage(message: StatementMessage) {
    this.statementSubject.next(message);
  }

  dataNotCorrect() {
    this.publishMessage({content: "Sprwdź poprawność wprowadzonych danych", error: true});
  }
}
