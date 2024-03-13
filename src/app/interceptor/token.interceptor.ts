import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenservice = inject(AuthService);
  const token = tokenservice.tieneToken();
  if (token) {
    const request  = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next(request);
  }
  return next(req).pipe(
    catchError((atrapar: HttpErrorResponse) => {
        if ([401,403].includes(atrapar.error.statusCode)) {
          console.error('Error de autenticación:', atrapar.error.message);
        }
        return throwError(() => atrapar.error.statusCode);
      })
    );
};