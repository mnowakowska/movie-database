import UserApi from './../api/userApi.js';

export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';



export function setToken(token) {
    return {
        type: SET_TOKEN,
        token
    }
}


export function logoutUser() {
    return {
        type: REMOVE_TOKEN,
    }
}


export function authUser(username, password) {
    return function(dispatch) {
        return UserApi.authUser(username, password).then(response => {
            dispatch(setToken(response.token));
        }).catch(error => {
            throw(error);
        });
    };
}
