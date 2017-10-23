import UserApi from './../api/userApi.js';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const GET_FAVORITE = 'GET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';


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


export function setFavorite(favorite) {
    return {
        type: GET_FAVORITE,
        favorite
    }
}

export function addFavorite(entity) {
    return {
        type: ADD_FAVORITE,
        entity
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


export function getUserFavorite() {
    return function(dispatch) {
        return UserApi.getFavorite().then(response => {
            debugger;
            dispatch(setFavorite(response));
        }).catch(error => {
            throw(error)
        });
    };
}


export function addUserFavorite(media) {
    return function(dispatch) {
        return UserApi.addFavorite(media).then(response => {
            debugger;
            dispatch(addFavorite(response))
        }).catch(error => {
            throw(error)
        });
    };
}
