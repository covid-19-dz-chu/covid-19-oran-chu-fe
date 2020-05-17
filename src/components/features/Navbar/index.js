import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/firebase';
import { LOGOUT_REQUESTED } from '../../../utils/constants/actionTypes';
import BNavbar from 'react-bootstrap/Navbar';
import BNav from 'react-bootstrap/Nav';

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.app.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout : (payload) => dispatch({type : LOGOUT_REQUESTED , payload}),
});

const Navbar = (props) => {
  const isAuthenticated  = props.isAuthenticated;

  const logoutCall = () => {
    props.onLogout(logout());
  }
return (
      <BNavbar bg="light" expand="lg">
        <div className="container">
          <BNavbar.Brand href="#home">CHUO Covid</BNavbar.Brand>
          <BNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BNavbar.Collapse id="basic-navbar-nav">
            <BNav className="ml-auto">
              { !isAuthenticated ? (
                <>
                <BNav.Link>
                  <Link to="/login">Login</Link>
                </BNav.Link>
                <BNav.Link>
                  <Link to="/signup">Signup</Link>
                </BNav.Link>
                </>
              ) : (
                <>
                  <BNav.Link>
                  <Link to="/dashbord">Dashbord</Link>
                  </BNav.Link>
                  <BNav.Link>
                    <Link onClick={logoutCall}>Logout</Link>
                  </BNav.Link>
                </>
              )}
              
              
            </BNav>
          </BNavbar.Collapse>
        </div>
      </BNavbar>
    )
  }



export default connect(mapStateToProps , mapDispatchToProps)(Navbar);