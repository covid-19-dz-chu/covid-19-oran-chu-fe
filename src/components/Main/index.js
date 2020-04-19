import React , {Component } from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Singup from '../pages/Singup';
import homeRequets from '../../api/home';
import { connect } from 'react-redux';
import { 
  APP_LOADING,
} from '../../constants/actionTypes';


const mapStateToProps = (state) => {
  return {
    appName: state?.app?.appName ,
    appLoaded: state?.app?.appLoaded,
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
    const token = localStorage.getItem('jwt');
    this.props.onLoad(homeRequets.healthCheck(), token ? token : token);
  }
  
  componentWillReceiveProps(props){
    if(this.props.redirect){
      
    }
  }
  
  reload(){
    const token = localStorage.getItem('jwt');
    this.props.onLoad(homeRequets.healthCheck(), token ? token : '');
  }

  render() {
    if(this.props.appLoaded){
      return (
        <div>
          <h1>{this.props.appName}</h1>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Singup}/>
              <Route path="/dashbord" component={Dashbord}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else{
      return (
        <>
          <button onClick={this.reload}>
            Reload
          </button>
        </>
      );
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(App) ;
