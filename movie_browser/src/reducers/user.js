import {
    SET_TOKEN,
    REMOVE_TOKEN,
    SET_LOGIN_ERROR,
    ADD_FAVORITE,
    GET_FAVORITE,
} from './../actions/user.js'


const initialState = {
    token: null,
    loginError: false,
    favorite: [],
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
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
        case ADD_FAVORITE:
            return Object.assign({}, state, {
                favorite: [...state.favorite, action.entity],
            });
        case GET_FAVORITE:
            return Object.assign({}, state, {
                favorite: [...action.favorite],
            });
    default:
        return state;
    }
}
