import {REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_USER, GET_ERRORS} from '../actions/types';


const initState = {
    isAuthenticated: false,
    loading: true,
    error: {},
    user: {}
}

export default function(state = initState, action){
    const {type,payload} = action;
    switch(type){

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_USER:
            localStorage.removeItem('jwtToken');
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        case GET_ERRORS:
               return {
                   error: payload
               };

        default:
            return state;
    }
}