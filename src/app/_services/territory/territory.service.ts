import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  selectedCandidate: any;
  territory: any;
  baseUrl: string;
  httpOptions = {};
  environment = {
      production: false,
      apiUrl: 'http://localhost:3000',
      basePath:'/territory',
      environment: '@localhost'
  };

  
  //creates an instance of httpclient in http so that it can be used in our service
  constructor(private http: HttpClient){
    this.baseUrl = this.environment.apiUrl + this.environment.basePath;
    this.headers();
  }

  headers(){
      this.httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              // 'Authorization': JSON.parse(localStorage.getItem('currentUser')).cid//this may be the source of error...
          })
      };
  }

  get(){
    // get(id?: string){
    this.headers();
    // if(id == undefined){
    //     id = 'all';
    // }
    // const url = `${this.baseUrl}/${JSON.parse(localStorage.getItem('currentUser')).restaurant.id}/campaign/${id}`;
    return this.http.get<any>(this.baseUrl, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //for php connection?
  getAll(): Observable<any>{
    return this.http.get(this.baseUrl).pipe(
      (res) => {
        this.territory = res;
        return this.territory;
      }
    )
  }



  errorHandler(error: HttpErrorResponse) {
      console.error('Campaigns An error occurred:', error);
  
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        // console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
        localStorage.removeItem('currentUser');
      }
      // return an observable with a user-facing error message
      return throwError(error.error);
    }
}
