import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './../reducers/index.js';


const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(
    store,
    {
        whitelist: ['token'],
    }
);

export default store;
