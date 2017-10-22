import { combineReducers } from 'redux';
import media from './media.js';
import user from './user.js';

const rootReducer = combineReducers({
    user,
    media
});

export default rootReducer;
