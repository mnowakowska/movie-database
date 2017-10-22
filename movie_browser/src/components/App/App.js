import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                { this.props.isAuthenticated ?
                    <li><Link to="/media">Search</Link></li> :
                    <li><Link to="/login">Sing In</Link></li>
                }
            </ul>
        </header>
      </div>
    );
  }
}

export default App;
