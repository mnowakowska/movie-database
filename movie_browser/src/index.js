import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store.js';
import './index.css';
import App from './components/App/App';
import MediaRedux from './components/Media/Media.Redux.js';
import registerServiceWorker from './registerServiceWorker';


const Root = () => (
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/media">Search</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={App}/>
                <Route exact path="/media" component={MediaRedux}/>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
