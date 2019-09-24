import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate }  from '../../api/candidate/candidate.reducer'
 
@Injectable({
  providedIn: 'root'
})

export class ProfilesService{
    candidates: any;
    baseUrl: string;
    environment = {
        production: false,
        apiUrl: 'https://mockconventiondata.com',
        basePath:'/api/',
        environment: '@localhost'
    };

    constructor(private http: HttpClient) {
      this.baseUrl = this.environment.apiUrl + this.environment.basePath;
    };

    get(name: string) {
      return this.http.get(this.baseUrl + `candidates/${name}`).pipe(
        (res) => {
          this.candidates = JSON.stringify(res);
          return this.candidates
        }
      )
    };

    getAll() {
      return this.http.get(this.baseUrl + `candidates`).pipe(
        (res) => {
          this.candidates = JSON.stringify(res);
          return this.candidates;
        }
      )
    };

}