import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class HttpBookInterceptor implements HttpInterceptor {
  constructor() {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(catchError((error) => this.handleError(error, req)));
}

private handleError(error: HttpErrorResponse, req: HttpRequest<unknown>): Observable<never> {
    const errorMessage = `HTTP_ERROR: Call ${req.method} to ${req.url} has failed.`;
    console.error('Error: ', errorMessage);
    return throwError(() => 'Oops we have a HTTP error!');
}
}

export const HttpBookInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpBookInterceptor,
    multi: true,
  },
];
