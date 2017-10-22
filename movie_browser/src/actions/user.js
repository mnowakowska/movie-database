import UserApi from './../api/userApi.js';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';



export function setToken(token) {
    return {
        type: SET_TOKEN,
        token
    }
}


export function setLoginError (value) {
    return {
        type: SET_LOGIN_ERROR,
        value
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
            if (!response.token) {
                dispatch(setLoginError(true));
                return;
            }
            dispatch(setToken(response.token));
            dispatch(setLoginError(false))
        }).catch(error => {
            dispatch(setLoginError(true));
        });
    };
}
