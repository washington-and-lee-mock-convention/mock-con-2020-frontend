interface Candidate {
    firstName: String;
    lastName: String;
    age: BigInteger;
    age2024: BigInteger;
    race: String;
    family: String;
    ideologicalScore: BigInteger;
    legislation: String;
    positions: String;
    schooling: String;
    currentJob: String
};

export interface AppState {
    candidates: Array<Candidate>;
}

export const INITIAL_STATE = {
    candidates: []
}

export function rootreducer(state, action) {
    return state;
}