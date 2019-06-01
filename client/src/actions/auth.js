import axios from 'axios';

import {GET_ERRORS,LOGIN_SUCCESS,LOGOUT_USER} from './types';



export const register = (userData,history) => dispatch => {

    axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

}
//login user
export const login = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
           dispatch({
               type: LOGIN_SUCCESS,
               payload: res.data
           })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
};



export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    });
}