import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  UPDATE_FIELD_SIGNUP, 
  SIGNUP_PAGE_UNLOADED,
  SIGNUP_REQUESTED,
  SIGNUP_PAGE_LOADED,
  VALIDATE_FIELDS_SIGNUP
} from '../../../constants/actionTypes';

const mapStateToProps = (state) => {
  return {
    signup : state.signup,
  }
}
  
const mapDispatchToProps = (dispatch) => ({
  onLoad:() =>
    dispatch({type:SIGNUP_PAGE_LOADED}),
  onChangeField: (key, value) =>
    dispatch({type: UPDATE_FIELD_SIGNUP, key, value}),
  onValidateFields:(errors)=>
    dispatch({type:VALIDATE_FIELDS_SIGNUP , payload : errors }),
  onSubmit: (username, password) =>
    dispatch({ type: SIGNUP_REQUESTED, payload:authRequests.signup(username , password)}),
  onUnload: () =>
    dispatch({ type: SIGNUP_PAGE_UNLOADED })
});


class Singup extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onLoad();
  }

  validate(credentials){
    const errors = {};
    if(!credentials.email){
      errors.email = 'Veuillez introduire votre email'
    }
    
    if(!credentials.password){
      errors.password = 'Veuillez introduire votre mot de passe';
    }

    if(credentials.password != credentials.confirmPassword){
      errors.confirmPassword = 'Votre confirmation de mot de passe est invalid'
    }
    return errors;
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const errors = this.validate(this.props.signup);
    if( Object.keys(errors).length === 0){
      console.log({
        email : this.props.signup.email,
        password :this.props.signup.password,
        confirmPassword : this.props.signup.confirmPassword,
      })
      // this.props.onSubmit(this.props.email , this.props.password);
    }else {
      this.props.onValidateFields(errors);
    }
    
  }
    
  render() {
    
    const { email, password , confirmPassword , errors } = this.props.signup;
    
    return (
      <div>
        <h1>Inscrire </h1>
        <small>Si vous etes inscris ? <Link to="/login">Veuillez vous connecter</Link></small>
        
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label>Email</label>
            <input  className="form-control form-control-lg"
                    type="text"
                    placeholder="Entrer votre email"
                    value={email}
                    onChange={(e) => this.props.onChangeField('email' , e.target.value)} />
          </fieldset>
          <fieldset>
            <label>Mot de passe</label>
            <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Entrer votre mot de passe"
                      value={password}
                      onChange={(e) => this.props.onChangeField('password' , e.target.value)} />
          </fieldset>
          <fieldset>
            <label>Confirmation Mot de passe</label>
            <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Confirmer votre mot de passe"
                      value={confirmPassword}
                      onChange={(e) => this.props.onChangeField('confirmPassword' , e.target.value)} />
          </fieldset>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            >
            Sign in
          </button>
        </form>
      </div>
    );  
  }
}



export default connect(mapStateToProps ,mapDispatchToProps)(Singup);