import { connect } from 'react-redux'

import SingIn from './SingIn.js';
import { authUser } from './../../actions/token.js';


const mapDispatchToProps = dispatch => {
  return {
    authUser: (username, password) => {
        dispatch(authUser(username, password))
    },
  }
}


const SingInRedux = connect(
    null,
    mapDispatchToProps
)(SingIn);

export default SingInRedux;
