import React , {Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ErrorBoundary from '../HoCs/ErrorBoundary';
import PrivateRoute from '../HoCs/PrivateRoute';
import GuestRoute from '../HoCs/GuestRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Singup from '../pages/Singup';
import homeRequets from '../../api/home';
import { connect } from 'react-redux';
import { APP_LOADING } from '../../constants/actionTypes';

const mapStateToProps = (state) => {
  return {
    appName: state?.app?.appName ,
    appLoaded: true,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOADING, payload, token }),
});
class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onLoad(homeRequets.healthCheck(), "JFKJFKSJFSJFKSJ");
  }
  
  render() {
    if(this.props.appLoaded){
      return (
        <BrowserRouter>
            <Switch>
              <GuestRoute exact path="/" component={Home}/>
              <GuestRoute exact path="/login" component={Login}/>
              <GuestRoute exact path="/signup" component={Singup}/>
              <PrivateRoute path="/dashbord" component={Dashbord}/>
            </Switch>
          </BrowserRouter>
        );
    } else{
      return (
        <>
          <button onClick={null}/>
        </>
      );
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(App) ;
