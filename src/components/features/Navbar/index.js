import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/firebase';
import {
  LOGOUT_REQUESTED
} from '../../../utils/constants/actionTypes';

const mapStateToProps = (state) => ({
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout : (payload) => dispatch({type : LOGOUT_REQUESTED , payload}),
});

const Navbar = (props) => {

  const logoutCall = () => {
    props.onLogout(logout());
  }

  if (!props.isAuthenticated){
    return (
      <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
      </div>
    )
  }
  else {
    return (
      <div>
          <Link to="/dashbord">Dashbord</Link>
          <button onClick={logoutCall}>Logout</button>
      </div>
    )
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Navbar);