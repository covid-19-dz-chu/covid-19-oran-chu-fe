import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  LOGIN_REQUESTED,
  LOGIN_PAGE_UNLOADED,
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_AUTH,
} from '../../../constants/actionTypes';


const mapStateToProps = (state) => {
  return {
    login:state.login,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoad:() => 
    dispatch({type : LOGIN_PAGE_LOADED }),
  onChangeField: (key , value) => 
    dispatch({ type: UPDATE_FIELD_AUTH, key: key, value }),
  onSubmit: (username, password) =>
    dispatch({ type: LOGIN_REQUESTED, payload:authRequests.login(username , password)}),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});
class Login extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    
  }
  
  onSubmit(email , password){
    console.log(email , password);
  }

  render(){
    return (
      <div>
        <h1>Login page</h1>
        <small>You dont have an account yet ? <Link to="/signup">Singup</Link></small>
        <form onSubmit={this.onSubmit(this.props.email , this.props.password)}>
          <fieldset>
            <label>Email</label>
            <br/>
            <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Entrer votre email"
                      value={this.props.username}
                      onChange={(e) => { console.log(e.target.value); this.props.onChangeField('email' , e.target.value)}} />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <br/>
            <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Entrer votre mot de passe"
                      value={this.props.password}
                      onChange={(e) => this.props.onChangeField('password' , e.target.value)} />
          </fieldset>
        </form>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);