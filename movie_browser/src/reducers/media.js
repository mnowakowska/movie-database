import { SET_MEDIA } from './../actions/media.js'


const initialState = {
    media: [],
};

export default function media(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA:
        return Object.assign({}, state, {
            media: [...action.mediaList]
        });
    default:
        return state;
    }
}
