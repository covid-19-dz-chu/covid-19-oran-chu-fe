import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  UPDATE_FIELD_AUTH, 
  SIGNUP_PAGE_UNLOADED,
  SIGNUP_REQUESTED,
} from '../../../constants/actionTypes';

const mapStateToProps = state => ({ 
  ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (username, password) =>
    dispatch({ type: SIGNUP_REQUESTED, payload:authRequests.signup(username , password)}),
  onUnload: () =>
    dispatch({ type: SIGNUP_PAGE_UNLOADED })
});


class Singup extends Component{
  constructor(props){
    super(props);
  }

  onSubmit(email,password){
    
  }

  render() {
    return (
      <div>
        <h1>Signup page</h1>
        <small>You already have an account ? <Link to="/login">Login</Link></small>
        <form onSubmit={this.onSubmit(this.props.email , this.props.password)}>
          <fieldset>
            <label>Email</label>
            <br/>
            <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Entrer votre email"
                      value={this.props.username}
                      onChange={(e) => this.props.onChangeField('email' , e.target.value)} />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <br/>
            <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Entrer votre password"
                      value={this.props.password}
                      onChange={(e) => this.props.onChangeField('password' , e.target.value)} />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <br/>
            <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Entrer votre mot de passe"
                      value={this.props.confirmPassword}
                      onChange={(e) => this.props.onChangeField('password' , e.target.value)} />
          </fieldset>
        </form>
      </div>
    );  
  }
  
}

export default connect(mapStateToProps ,mapDispatchToProps)(Singup);