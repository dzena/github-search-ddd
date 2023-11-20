import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      retry(2),
      catchError((e: HttpErrorResponse) => {
        this._snackBar.open(e.error.message, undefined, {
          announcementMessage: 'Error',
          duration: 2000,
        });

        return throwError(e);
      })
    );
  }
}
