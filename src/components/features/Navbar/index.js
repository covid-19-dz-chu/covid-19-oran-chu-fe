import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BNavbar from 'react-bootstrap/Navbar';
import BNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LOGOUT_REQUESTED } from '../../../utils/constants/actionTypes';
import { logout } from '../../../api/firebase';

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.app.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: (payload) => dispatch({ type: LOGOUT_REQUESTED, payload }),
});

const Navbar = (props) => {
  const { isAuthenticated } = props;

  const logoutCall = () => {
    props.onLogout(logout());
  };

  return (
    <BNavbar bg="light" expand="lg">
      <Container>
        <BNavbar.Brand href="#home">CHUO Covid</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <BNav className="ml-auto">
            {!isAuthenticated ? (
              <>
                <BNav.Link>
                  <Link to="/login">Connexion</Link>
                </BNav.Link>
                <BNav.Link>
                  <Link to="/signup">Inscription</Link>
                </BNav.Link>
              </>
            ) : (
              <>
                <BNav.Link>
                  <Link to="/dashboard">Bureau</Link>
                </BNav.Link>
                <BNav.Link>
                  <Link to="/dashboard/search">Recherche</Link>
                </BNav.Link>
                <BNav.Link>
                  <Link to="/" onClick={() => logoutCall()}>
                    Deconnecter
                  </Link>
                </BNav.Link>
              </>
            )}
          </BNav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
