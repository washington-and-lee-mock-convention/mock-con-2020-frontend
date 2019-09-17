import { Action, createReducer, on } from '@ngrx/store';
import { getCandidates, getCandidate } from './candidate.actions';

export interface Candidate {
    candidate_id: number;
    first_name: string;
    last_name: string;
    age: number;
    age_2024: number;
    race: string;
    family: string;
    party: string;
    ideology_score: number;
    legislation: string;
    positions: string;
    schooling: string;
    current_job: string;
}

export interface State {
    single_candidate: Boolean;
    candidate_name: string;
    candidates: Array<Candidate>;
}

export const initialState: State = {
    single_candidate: false,
    candidate_name: null,
    candidates: []
};

const _candidateReducer = createReducer(initialState,
    on(getCandidate, (state, {name, candidate}) => ({...state, candidate_name: name, candidates: candidate})),
    on(getCandidates, (state, {candidate_list}) => ({...state, candidates: candidate_list}))
)

export function candidateReducer(state: State | undefined, action: Action) {
    return _candidateReducer(state, action)
}