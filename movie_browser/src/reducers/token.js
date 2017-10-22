import { SET_TOKEN, REMOVE_TOKEN } from './../actions/token.js'


const initialState = null;

export default function token(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
        case REMOVE_TOKEN:
            return null;
    default:
        return state;
    }
}
