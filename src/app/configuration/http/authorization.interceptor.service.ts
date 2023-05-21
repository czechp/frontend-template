import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthorizationService} from "../authorization/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private authorizationService: AuthorizationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationHash = this.authorizationService.getAuthorizationHash();
    if (authorizationHash) {
      const httpRequest = req.clone({
          headers: req.headers.append("Authorization", `Basic ${authorizationHash}`)
        }
      );
      return next.handle(httpRequest);
    }
    return next.handle(req);
  }

}
