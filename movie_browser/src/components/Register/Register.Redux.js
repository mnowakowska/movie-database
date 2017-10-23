import { connect } from 'react-redux'

import Register from './Register.js';
import { createUser } from './../../actions/user.js';


const mapDispatchToProps = dispatch => {
  return {
    createUser: (username, password) => {
        dispatch(createUser(username, password))
    },
  }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
        error: state.user.registerError,
    }
}

const RegisterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);

export default RegisterRedux;
