import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../store';
import GuestRoute from '../HoCs/GuestRoute';
import PrivateRoute from '../HoCs/PrivateRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import homeRequets from '../../api/home';
import { app } from '../../api/firebase';
import { 
  APP_LOADING,
  LOGOUT_REQUESTED,
} from '../../utils/constants/actionTypes';
import Navbar from '../features/Navbar';
import { dispatch } from 'rxjs/internal/observable/pairs';


const mapStateToProps = (state) => ({
  appName: state.app.appName,
  appLoaded: state.app.appLoaded,
  currentUser: state.auth.currentUser,
  token: state.auth.token,
  redirect: state.app.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: APP_LOADING, payload }),
  onLogout : (payload) => dispatch({type : LOGOUT_REQUESTED}),
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    
    app.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.onLoad(Promise.all([homeRequets.healthCheck(), user ]));
      }else {
        this.props.onLoad(Promise.all([homeRequets.healthCheck(), null]));
      }
    });
  }

  componentWillUnmount(){
    //
  } 

  reload() {
    const { token } = this.props;
    this.props.onLoad(homeRequets.healthCheck(), token || null);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Router history={history}>
          <Navbar/>
          <h1>{this.props.appName}</h1>
            <Switch>
              <GuestRoute exact path="/" component={Home} />
              <GuestRoute exact path="/login" component={Login} />
              <GuestRoute exact path="/signup" component={Signup} />
              <PrivateRoute path="/dashbord" component={Dashbord} />
            </Switch>
          </Router>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.reload()}>Reload</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
