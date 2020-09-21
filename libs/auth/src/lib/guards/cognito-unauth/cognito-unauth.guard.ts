import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class CognitoUnauthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        this._router.navigate(['pages']);
        return false;
      })
      .catch(() => {
        return true;
      });
  }
}
