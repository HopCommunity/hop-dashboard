import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class CognitoInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
    // if (CognitoService.user) {
    //   console.log(
    //     'token',
    //     CognitoService.user.signInUserSession.accessToken.jwtToken
    //   );
    //   const cloned = req.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json; charset=utf-8',
    //       Accept: 'application/json',
    //       Authorization:
    //         CognitoService.user.signInUserSession.accessToken.jwtToken,
    //     },
    //   });
    //   return next.handle(cloned);
    // } else {
    //   return next.handle(req);
    // }
  }
}
