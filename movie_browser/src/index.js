import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CustomRouter from './routes.js';
import store from './store/store.js';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const Root = () => (
    <Provider store={store}>
        <CustomRouter />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
