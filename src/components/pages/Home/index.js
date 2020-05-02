import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED
} from '../../../constants/actionTypes';
import homeRequest from '../../../api/home';
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onLoad: () => 
    dispatch({ type : HOME_PAGE_LOADED}) 
});
class Home extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onLoad();
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

export default connect(mapStateToProps , mapDispatchToProps)(Home);
