import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  UPDATE_FIELD_SIGNUP,
  SIGNUP_PAGE_UNLOADED,
  SIGNUP_REQUESTED,
  SIGNUP_PAGE_LOADED,
  VALIDATE_FIELDS_SIGNUP,
} from '../../../utils/constants/actionTypes';
import '../../../styles/forms.css';
import Alert from 'react-bootstrap/Alert';


const mapStateToProps = (state) => {
  return {
    signup: state.signup,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: SIGNUP_PAGE_LOADED }),
  onChangeField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_SIGNUP, key, value }),
  onValidateFields: (errors) =>
    dispatch({ type: VALIDATE_FIELDS_SIGNUP, payload: { errors } }),
  onSubmit: (email, password) =>
    dispatch({
      type: SIGNUP_REQUESTED,
      payload: authRequests.signup(email, password),
    }),
  onUnload: () => dispatch({ type: SIGNUP_PAGE_UNLOADED }),
});

class Singup extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  validate(credentials) {
    const errors = {};
    if (!credentials.email) {
      errors.email = 'Veuillez introduire votre email';
    }

    if (!credentials.password) {
      errors.password = 'Veuillez introduire votre mot de passe';
    }
    if (credentials.password !== credentials.confirmPassword) {
      errors.confirmPassword = 'Votre confirmation de mot de passe est invalid';
    }
    
    return errors;
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const errors = this.validate(this.props.signup);
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.props.signup.email ,this.props.signup.email);
    } else {
      this.props.onValidateFields(errors);
    }
  };

  render() {
    const { email, password, confirmPassword, submitErrors, formErrors} = this.props.signup;

    return (
      <div>
        <h4>Inscription</h4>
        <small>
          Si vous etes inscris ?{' '}
          <Link to="/login">Veuillez vous connecter</Link>
        </small>
        <div>
        {
          ( submitErrors && submitErrors.message ) ?
          ( <Alert variant='danger'> { submitErrors.message }</Alert> ): 
          null
        }
        </div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) =>
                this.props.onChangeField('email', e.target.value)
              }
            />
            <small className="full-width form-error">{(formErrors && formErrors.email ) ? formErrors.email : '' }</small>
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="motDePasse">Mot de passe</label>
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) =>
                this.props.onChangeField('password', e.target.value)
              }
            />
            <small className="full-width form-error"  >{(formErrors && formErrors.password ) ? formErrors.password : '' }</small>

          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="confirmMotDePasse">Confirmation Mot de passe</label>
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Confirmer votre mot de passe"
              value={confirmPassword}
              onChange={(e) =>
                this.props.onChangeField('confirmPassword', e.target.value)
              }
            />
            <small className="full-width form-error">{(formErrors && formErrors.confirmPassword ) ? formErrors.confirmPassword : '' }</small>
          </fieldset>
          <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Singup);
