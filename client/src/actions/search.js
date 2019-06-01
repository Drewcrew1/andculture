

import {SAVE_RESULTS,CLEAR_RESULTS} from './types';



export const saveResults = (results) => dispatch => {

    dispatch({
        type: SAVE_RESULTS,
        payload: results
    });

}
export const clearResults = () => dispatch => {
    dispatch({
        type: CLEAR_RESULTS
    });
}
