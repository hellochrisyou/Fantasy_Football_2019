import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("interceptor: " + req.url);
    if (!req.url.startsWith('https://api.fantasy.nfl.com/v1/players/stats?statType=')) {
      req = req.clone({
        setHeaders: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
      });
    }
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('Success');
            // http response status code
            console.log(event.status);
          }
        },
        error => {
          // http response status code
          console.log('----response----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response---');
        }
      )
    );
  }
}
