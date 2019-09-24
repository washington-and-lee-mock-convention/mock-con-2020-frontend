import { createAction, props } from '@ngrx/store';
import { Candidate } from './candidate.reducer'

export const GET_CANDIDATE = '[Candidate Component] GET_CANDIDATES';
export const GET_CANDIDATES = '[Candidate Component] GET_CANDIDATE';
 
export const getCandidates = createAction(
    GET_CANDIDATE,
    props<{candidate_list: Array<Candidate>}>()
);

export const getCandidate = createAction(
    GET_CANDIDATES,
    props<{name: string; candidate: Array<Candidate>}>()
);