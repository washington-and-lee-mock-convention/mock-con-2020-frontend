import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {

    private baseUrl = 'http://mockconventiondata.com/api'

    constructor(
        private http: HttpClient
    ) {};

    getCandidates() {
        return this.http.get(`${this.baseUrl}/candidates`);
    };

};
