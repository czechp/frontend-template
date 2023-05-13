import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StatementService} from "../../service/statement.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private statementService: StatementService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const message = error.error?.message || "Nieznany błąd skontaktuj się z przczech@gmail.com";
        this.statementService.publicInfo(message);
        return throwError(() => error);
      })
    );
  }

}
