import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './auth/requireAuth.js';
import App from './components/App/App';
import MediaRedux from './components/Media/Media.Redux.js';
import SingInRedux from './components/SingIn/SingIn.Redux.js';
import HomePage from './components/HomePage/HomePage.js';


export default function CustomRouter () {
    return (
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SingInRedux} />
                <Route exact path="/media" component={requireAuth(MediaRedux)} />
            </div>
        </Router>
    );
};
