import {SAVE_RESULTS, CLEAR_RESULTS} from '../actions/types';


const initState = {
   results: [],
    loading: true,
    error: {}

}

export default function(state = initState, action) {
    const {type, payload} = action;
    switch (type) {

        case SAVE_RESULTS:

            return {
                ...state,
                results: payload,
                loading: false
            }
        case CLEAR_RESULTS:
            return {
                ...state,
                results: [],
                loading: false
            }
        default:
            return state;
    }
}