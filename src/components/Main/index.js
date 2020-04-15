import React , {Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ErrorBoundary from '../HoCs/ErrorBoundary';
import PrivateRoute from '../HoCs/PrivateRoute';
import GuestRoute from '../HoCs/GuestRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Singup from '../pages/Singup';
import { connect } from 'react-redux';
import {
  APP_LOADING
} from '../../constants/actionTypes';

const mapStateToProps = (state) => {
  return {
    appName : state.app.appName,
    loading : false,
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOADING, payload, token, skipTracking: true }),
  
});
class App extends Component {
  componentWillMount(){

  }
  
  render(){
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <GuestRoute exact path="/" component={Home}/>
            <GuestRoute exact path="/login" component={Login}/>
            <GuestRoute exact path="/signup" component={Singup}/>
            <PrivateRoute path="/dashbord" component={Dashbord}/>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
  
}


export default connect(() => {} , mapStateToProps)(App) ;
