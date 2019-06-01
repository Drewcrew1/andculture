import axios from 'axios';

import {GET_FAVS,REMOVE_FAV,GET_ERRORS,ADD_FAV} from './types';



export const getFavs = (uid) => dispatch => {

    axios.get(`/api/favs/${uid}`)
        .then((res) => {
            console.log('actions',res.data);
            dispatch({
                type: GET_FAVS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

}


export const removeFavs = (id) => dispatch => {
    axios.delete(`/api/favs/${id}`)
        .then((res) => {
            dispatch({
                type: REMOVE_FAV
            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const makeFav = (favData,uid) => dispatch => {
    favData.uid = uid;
    axios.post('/api/favs/', favData)
        .then(res => {
            dispatch({
                type: ADD_FAV

            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}