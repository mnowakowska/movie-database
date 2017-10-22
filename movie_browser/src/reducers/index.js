import { combineReducers } from 'redux';
import media from './media.js';
import token from './token.js';

const rootReducer = combineReducers({
    token,
    media
});

export default rootReducer;
