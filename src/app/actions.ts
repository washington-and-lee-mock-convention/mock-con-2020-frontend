import * as Constants from './constants';
import { RequestService } from './requests';

export const fetchCandidates = dispatch => (url: string) => {
    requests = new RequestService()
    dispatch({type: `${Constants.FETCH_CANDIDATES}_PENDING`})
}