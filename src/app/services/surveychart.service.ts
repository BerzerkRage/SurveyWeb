import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Params } from './params.service';
import { SurveyChartResult } from '../models/musicfav.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyChartService extends Params {

  constructor(
    private _httpClient: HttpClient
  ) {
    super();
  }


  getChart(): Observable<Array<SurveyChartResult>> {
    const URL_BASE:string = this.urlBase;
    const REST_SERVICE:string = this.urlSurveyApiService+"/chart"; 

    return this._httpClient
      .get<Array<SurveyChartResult>>(URL_BASE+REST_SERVICE)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
      } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
          return errorMessage;
      });
  } 
}
