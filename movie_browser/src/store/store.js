import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { media } from '../reducers/media.js';


const store = createStore(media, applyMiddleware(thunk));

export default store;
