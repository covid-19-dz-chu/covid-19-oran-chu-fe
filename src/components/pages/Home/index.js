import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import signupRequest from '../../../api/auth';
import {
  HOME_PAGE_LOADED
} from '../../../constants/actionTypes';


const mapDispatchToProps = dispatch => ({
  onLoad: () => 
    dispatch({ type : HOME_PAGE_LOADED , payload}) 
});
class Home extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.onLoad()
  }

  render(){
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    );  
  }
  
}

export default Home;
