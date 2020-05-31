import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import GuestRoute from '../HoCs/GuestRoute';
import PrivateRoute from '../HoCs/PrivateRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import homeRequets from '../../api/home';
import { setTokenRequest } from '../../api/request';
import Navbar from '../features/Navbar';
import { app } from '../../api/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';
import SynthesisDoc from '../pages/SynthesisDoc';
import Synthesis from '../pages/Synthesis';
import { history } from '../../store';
import {
  APP_LOADING,
  LOGOUT_REQUESTED,
} from '../../utils/constants/actionTypes';

const mapStateToProps = (state) => ({
  appName: state.app.appName,
  appLoaded: state.app.appLoaded,
  currentUser: state.app.currentUser,
  redirect: state.app.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: APP_LOADING, payload }),
  onLogout: () => dispatch({ type: LOGOUT_REQUESTED }),
});

class App extends Component {
  componentDidMount() {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.onLoad(Promise.all([homeRequets.healthCheck(), user]));
        user.getIdToken().then((token) => {
          setTokenRequest(token);
        });
      } else {
        this.props.onLoad(Promise.all([homeRequets.healthCheck(), null]));
      }
    });
  }

  reload() {
    //
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Router history={history}>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/dashboard" component={Dashbord} />
                <PrivateRoute
                  exact
                  path="/dashboard/search"
                  component={Synthesis}
                />
                <PrivateRoute
                  exact
                  path="/dashboard/document/:id"
                  component={SynthesisDoc}
                />
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
    return (
      <div className="text-center">
        <h1>CHUO gestion des patients</h1>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            onClick={this.reload}
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
