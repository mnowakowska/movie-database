import { SET_MEDIA } from './../actions/media.js'


const initialState = {
    media: [],
    activePage: 1,
    query: '',
    totalPages: 1,
};

export default function media(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA:
            return Object.assign({}, state, {
                media: [...action.mediaList],
                query: action.query,
                activePage: action.page,
                totalPages: action.totalPages,
            });
    default:
        return state;
    }
}
