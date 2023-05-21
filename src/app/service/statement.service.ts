import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

export interface StatementMessage {
  content: string;
  error: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private readonly SNACK_BAR_DURATION = 5000;

  constructor(private snackBar: MatSnackBar) {
  }

  publicInfo(message: string) {
    this.snackBar.open(message, "", {
      duration: this.SNACK_BAR_DURATION,
      verticalPosition: "bottom",
    });
  }

  dataNotCorrect() {
    this.publicInfo("Sprwdź poprawność wprowadzonych danych");
  }
}
