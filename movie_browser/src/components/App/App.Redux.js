import { connect } from 'react-redux'

import App from './App.js';


const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: !!state.user.token,
    }
}

const AppRedux = connect(
    mapStateToProps,
)(App);

export default AppRedux;
