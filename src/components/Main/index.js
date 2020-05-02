import React , {Component } from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestRoute from '../HoCs/GuestRoute';
import PrivateRoute from '../HoCs/PrivateRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import homeRequets from '../../api/home';
import { 
  APP_LOADING,
} from '../../constants/actionTypes';


const mapStateToProps = (state) => ({
  appName: state.app.appName ,
  appLoaded: state.app.appLoaded,
  currentUser : state.auth.currentUser,
  token : state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOADING, payload, token }), 
});

class App extends Component {
  
  componentWillMount(){
    const token = this.props.token;
    const healthCheck = homeRequets.healthCheck();
    this.props.onLoad(healthCheck, token ? token : null);
  }

  reload(){
    const token = this.props.token;
    this.props.onLoad(homeRequets.healthCheck() , token ? token : null);
  }
  
  render() {
    if(this.props.appLoaded){
      return (
        <div>
          <h1>{this.props.appName}</h1>
          <BrowserRouter>
            <Switch>
              <GuestRoute exact path="/" component={Home}/>
              <GuestRoute exact path="/login" component={Login}/>
              <GuestRoute exact path="/signup" component={Signup}/>
              <PrivateRoute path="/dashbord" component={Dashbord}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else{
      return (
        <div>
          <button onClick={this.reload()}>
            Reload
          </button>
        </div>
      );
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(App) ;
