import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuthenticated: state.app.isAuthenticated,
});

const Navbar = (props) => {
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
          <Link to="/logout">Logout</Link>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Navbar);