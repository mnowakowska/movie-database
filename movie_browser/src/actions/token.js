import UserApi from './../api/userApi.js';

export const SET_TOKEN = 'SET_TOKEN';



export function setToken(token) {
    return {
        type: SET_TOKEN,
        token
    }
}


export function authUser(username, password) {
    return function(dispatch) {
        return UserApi.authUser(username, password).then(response => {
            dispatch(setToken(response.token));
            window.location.href = '/media';
        }).catch(error => {
            throw(error);
        });
    };
}
