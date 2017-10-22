import { connect } from 'react-redux'

import SingIn from './SingIn.js';
import { authUser } from './../../actions/user.js';


const mapDispatchToProps = dispatch => {
  return {
    authUser: (username, password) => {
        dispatch(authUser(username, password))
    },
  }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
        error: state.user.loginError,
    }
}

const SingInRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingIn);

export default SingInRedux;
