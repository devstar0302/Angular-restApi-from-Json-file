import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  public sendGetRequest1(){
    return this.httpClient.get(this.SERVER_URL+'/307').pipe(catchError(this.handleError));
  }

  public sendGetRequest2(form:any){
    return this.httpClient.post(this.SERVER_URL,form).pipe(catchError(this.handleError));
  }

  public sendGetRequest3(id:number){
    return this.httpClient.delete(this.SERVER_URL+'/'+id).pipe(catchError(this.handleError));
  }

  public sendGetRequest4(id:number){
    return this.httpClient.get(this.SERVER_URL+'/'+id).pipe(catchError(this.handleError));
  }

  public sendGetRequest5(id:number,form:any){
    return this.httpClient.put(this.SERVER_URL+'/'+id, form).pipe(catchError(this.handleError));
  }

}