import { createStore } from 'redux';

import { media } from '../reducers/media.js';


const store = createStore(media);

export default store;
