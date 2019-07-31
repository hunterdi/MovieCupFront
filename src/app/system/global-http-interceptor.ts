import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}
intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      return next.handle(req).pipe(
          tap(evt => {
              if (evt instanceof HttpResponse) {
                if (evt.body && evt.body.success) {
                    this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-top-center' });
                  }
              }
          }),
          catchError((err: any) => {
              if (err instanceof HttpErrorResponse) {
                  try {
                    this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-top-center' });
                  } catch (e) {
                      this.toasterService.error('Ocorreu um erro', '', { positionClass: 'toast-top-center' });
                  }
              }
              return of(err);
          }));

    }

}
