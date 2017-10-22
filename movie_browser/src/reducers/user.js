import {
    SET_TOKEN,
    REMOVE_TOKEN,
    SET_LOGIN_ERROR
} from './../actions/user.js'


const initialState = {
    token: null,
    loginError: false,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            debugger;
            return Object.assign({}, state, {
                token: action.token,
            });
        case REMOVE_TOKEN:
            return Object.assign({}, state, {
                token: null,
            });
        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.value,
            });
    default:
        return state;
    }
}
