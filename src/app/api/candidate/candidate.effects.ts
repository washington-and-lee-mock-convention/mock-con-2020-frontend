import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Injectable()
export class CandidateEffects {
  // This will be used to send the dispatch calls to the reducer
  
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

};