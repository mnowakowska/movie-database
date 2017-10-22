import { SET_TOKEN } from './../actions/token.js'


const initialState = null;

export default function token(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
    default:
        return state;
    }
}
