import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestRoute from '../HoCs/GuestRoute';
import PrivateRoute from '../HoCs/PrivateRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import homeRequets from '../../api/home';
import { setTokenToRequest } from '../../api/request';
import Navbar from '../features/Navbar';
import { app } from '../../api/firebase';
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
  onLogout : (payload) => dispatch({type : LOGOUT_REQUESTED}),
});

class App extends Component {
  componentWillMount() {
    app.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.onLoad(Promise.all([homeRequets.healthCheck(), user ]));
        user.getIdToken().then((token) => {
          setTokenToRequest(token);
        })
      }else {
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
          <Router>
          <Navbar/>
          <h1>{this.props.appName}</h1>
            <Switch>
              <Route exact path="/" component={Home} />
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
        <h1>Loading..</h1>
        <button onClick={this.reload()}>Reload</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
