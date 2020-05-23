import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  LOGIN_REQUESTED,
  LOGIN_PAGE_UNLOADED,
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
  VALIDATE_FIELDS_LOGIN,
} from '../../../utils/constants/actionTypes';
import '../../../styles/forms.css';

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: LOGIN_PAGE_LOADED }),
  onChangeField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_LOGIN, key, value }),
  onValidateFields: (errors) =>
    dispatch({ type: VALIDATE_FIELDS_LOGIN, payload: {errors}}),
  onSubmit: (username, password) =>
    dispatch({
      type: LOGIN_REQUESTED,
      payload: authRequests.login(username, password),
    }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

class Login extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  validate(credentials) {
    const errors = {};
    if (!credentials.email) {
      errors.email = 'Veuillez introduire votre email';
    }

    if (!credentials.password) {
      errors.password = 'Veuillez introduire votre mot de passe';
    }
    return errors;
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const errors = this.validate( this.props.login );
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit( this.props.login.email , this.props.login.password );
    } else {
      this.props.onValidateFields(errors);
    }
  };

  render() {
    const { email, password , formErrors , submitErrors } = this.props.login;

    return (
      <div>
        <h1>Se connecter</h1>
        <small>
          Si vous etes pas inscris ? <Link to="/signup">Inscrivez vous</Link>
        </small>
        <div>
          <strong>{
            ( submitErrors && submitErrors.message ) ? 
            submitErrors.message : 
            null
          }</strong>
        </div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label className="form-label" htmlFor="email">Email</label>
            <br />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) =>
                this.props.onChangeField('email', e.target.value)
              }
            />
          </fieldset>

          <small>{(formErrors && formErrors.email ) ? formErrors.email : '' }</small>
          <fieldset>
            <label className="form-label">Password</label>
            <br />
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) =>
                this.props.onChangeField('password', e.target.value)
              }
            />
          </fieldset>
          <small>{(formErrors && formErrors.password ) ? formErrors.password : '' }</small>
          <br />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
