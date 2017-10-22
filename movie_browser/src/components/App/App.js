import React from 'react';
import { Link } from 'react-router-dom';

import LogOutRedux from './../LogOut/LogOut.Redux.js';


function App ({ isAuthenticated }) {
    const authenticatedLinks = [
        <li key="media"><Link to="/media">Search</Link></li>,
        <li key="logout"><LogOutRedux /></li>,
    ];
    const unauthenticatedLinks = [
        <li key="login"><Link to="/login">Sing In</Link></li>,
    ];
    return (
        <div>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { isAuthenticated ?
                        authenticatedLinks :
                        unauthenticatedLinks
                    }
                </ul>
            </header>
        </div>
    );
}

export default App;
