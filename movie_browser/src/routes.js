import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './auth/requireAuth.js';
import AppRedux from './components/App/App.Redux.js';
import MediaRedux from './components/Media/Media.Redux.js';
import SingInRedux from './components/SingIn/SingIn.Redux.js';
import RegisterRedux from './components/Register/Register.Redux.js';
import FavoritesRedux from './components/Favorites/Favorites.Redux.js';
import HomePage from './components/HomePage/HomePage.js';


export default function CustomRouter () {
    return (
        <Router>
            <div>
                <Route path="/" component={AppRedux} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SingInRedux} />
                <Route exact path="/register" component={RegisterRedux} />
                <Route exact path="/media" component={requireAuth(MediaRedux)} />
                <Route exact path="/favorites" component={requireAuth(FavoritesRedux)} />
            </div>
        </Router>
    );
};
