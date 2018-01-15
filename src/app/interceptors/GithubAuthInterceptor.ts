import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      // headers: req.headers.set('Authorization', 'token 51d25e6961fd3a31a45e5046292e2355c200700a')
    });
    return next.handle(authReq);
  }
}
