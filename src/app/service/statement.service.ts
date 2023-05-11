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

  publishInfo(message: string) {
    this.statementSubject.next({content: message, error: false});
  }

  publicError(message: string) {
    this.statementSubject.next({content: message, error: true});
  }

  dataNotCorrect() {
    this.publicError("Sprwdź poprawność wprowadzonych danych");
  }
}
