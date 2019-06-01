import {GET_FAVS,REMOVE_FAV,ADD_FAV,GET_ERRORS} from '../actions/types';


const initState = {
    error: {},
    favs: []
}

export default function(state = initState, action){
    const {type,payload} = action;
    switch(type){

        case GET_FAVS:
console.log('reducer',payload);
            return {
                ...state,
                favs: payload
            }

        case REMOVE_FAV:

            return {
                ...state
            }
        case ADD_FAV:

            return {
                ...state
            }
        case GET_ERRORS:
            return {
                error: payload
            };




        default:
            return state;
    }
}