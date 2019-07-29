import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs';

@Injectable()
export class ErrorHandlerGlobal implements ErrorHandler {
  // handleError(error) {
  //   // do something with the exception
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    console.error('-----------error------------');
    return (error: any): Observable<T> => {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        console.log(`${operation} failed: ${error.message}`);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
