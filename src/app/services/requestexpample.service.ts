import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Complaint } from "../complaint/complaint";

@Injectable({
    providedIn: 'root',
})
export class RequestExamples {
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    private url = 'http://jsonplaceholder.typicode.com/posts';
    private urlErr = 'https://jsonplaceholder.typicode.com/error/501';

    constructor(private httpClient: HttpClient) { }

    getPosts(){
        return this.httpClient.get(this.url);
    }
    sendComplaint(complaint:Complaint) {
        return complaint;
    }
    postsPipe() {
        return this.httpClient
          .get(this.urlErr)
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