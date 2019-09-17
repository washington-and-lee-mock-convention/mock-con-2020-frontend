import { createAction, props } from '@ngrx/store';
import { Candidate } from './candidate.reducer'
 
export const getCandidates = createAction(
    'GET_CANDIDATES',
    props<{candidate_list: Array<Candidate>}>()
);

export const getCandidate = createAction(
    'GET_CANDIDATE',
    props<{name: string; candidate: Array<Candidate>}>()
);