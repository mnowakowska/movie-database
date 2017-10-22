import { connect } from 'react-redux'

import { logoutUser } from './../../actions/user.js';
import LogOut from './LogOut.js';


const mapDispatchToProps = dispatch => {
  return {
    logoutUser: query => {
        dispatch(logoutUser())
    },
  }
}

const LogOutRedux = connect(
    null,
    mapDispatchToProps
)(LogOut);

export default LogOutRedux;
