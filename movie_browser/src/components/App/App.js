import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogOutRedux from './../LogOut/LogOut.Redux.js';

import './App.css';

function App ({ isAuthenticated }) {

    return (
        <Navbar inverse collapseOnSelect id="browser-navbar">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Movie Browser</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                { isAuthenticated && (
                    <div className="user-links">
                        <Link className="nav-link" to="/media">Browse</Link>
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </div>
                )}
            </Nav>
            <Nav pullRight>
                { !isAuthenticated ?
                    <Link className="nav-link" to="/login">Sing In</Link> :
                    <LogOutRedux className="nav-link" />
                }
            </Nav>
        </Navbar>
    );
}

export default App;
