import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { League } from 'src/app/shared/model/interface.model';
import { ErrorHandlerGlobal } from '../error-handler';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({})
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  bodyParam = {};
  errorHandlerGlobal = new ErrorHandlerGlobal();
  constructor(private http: HttpClient) {}

  extractData(res: Response) {
    const body = res;
    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}` + `Error message is: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  httpGet(url: string): Observable<any> {
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.errorHandlerGlobal.handleError)
    );
  }

  httpGetAll(url: string | null): Observable<League[]> {
    return this.http.get<any[]>(url, httpOptions).pipe(catchError(this.handleError));
  }

  httpPost(url: string, bodyParam): Observable<any> {
    return this.http.post(url, bodyParam, httpOptions).pipe(
      map(this.extractData),
      catchError(this.errorHandlerGlobal.handleError)
    );
  }

  httpPut(url: string, bodyParam): Observable<any> {
    return this.http.put(url, bodyParam, httpOptions).pipe(
      map(this.extractData),
      // catchError(this.handleError)
      catchError(this.errorHandlerGlobal.handleError)
    );
  }
}
