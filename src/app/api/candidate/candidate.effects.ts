import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { ProfilesService } from '../../_services/profiles/profiles.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as CandidateActions from './candidate.actions'

@Injectable()
export class CandidateEffects {
  // This will be used to send the dispatch calls to the reducer

  loadCandidates$ = createEffect(() => this.actions$.pipe(
      ofType(CandidateActions.GET_CANDIDATES),
      mergeMap(() => this.profileService.getAll().pipe(
          map(candidates => ({type: CandidateActions.GET_CANDIDATES, candidates_list: candidates})),
          catchError(() => EMPTY)
      ))
    )
  );
  
  constructor(
    private actions$: Actions,
    private profileService: ProfilesService
  ) { }

};