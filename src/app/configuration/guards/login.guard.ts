import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthorizationService} from "../authorization/authorization.service";
import {StatementService} from "../../service/statement.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService, private statementService: StatementService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logged: boolean = this.authorizationService.isLogged();
    if (!logged) {
      this.statementService.publicInfo("Musisz być zalogowany aby mieć dostęp do tego zasobu");
      this.router.navigate(["/login"]);
    }
    return logged;
  }


}
