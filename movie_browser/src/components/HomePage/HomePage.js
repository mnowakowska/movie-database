import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';


function HomePage () {
    return (
        <header className="masthead">
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome To Movie DB browser!</div>
                    <div className="intro-heading">It's Nice To Meet You</div>
                    <Link to="/media" className="btn btn-xl browse-button">Browse Movies</Link>
                </div>
            </div>
        </header>
    );
}

export default HomePage;
