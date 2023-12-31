import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { SurveyModel, MusicStyle } from '../models/survey.model';
import { Params } from './params.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService extends Params {

  constructor(
    private _httpClient: HttpClient
  ) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getEstilosMusicales(): Observable<Array<MusicStyle>> {
    const URL_BASE:string = this.urlBase;
    const REST_SERVICE:string = this.urlMusicStyleApiService+"/get"; 

    return this._httpClient
      .get<Array<MusicStyle>>(URL_BASE+REST_SERVICE)
      .pipe(retry(1), catchError(this.handleError));
  }

  sendEstiloMusicalFavorito(survey:SurveyModel): Observable<Boolean> {
    const URL_BASE:string = this.urlBase;
    const REST_SERVICE:string = this.urlSurveyApiService+"/"; 

    return this._httpClient
      .post<Boolean>(URL_BASE+REST_SERVICE,survey,this.httpOptions)
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
