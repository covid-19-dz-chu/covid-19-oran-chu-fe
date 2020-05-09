import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authRequests from '../../../api/auth';
import {
  LOGIN_REQUESTED,
  LOGIN_PAGE_UNLOADED,
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
} from '../../../utils/constants/actionTypes';

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: LOGIN_PAGE_LOADED }),
  onChangeField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_LOGIN, key, value }),
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

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.props.login.email, this.props.login.password);
  };

  render() {
    const { email, password } = this.props.login;

    return (
      <div>
        <h1>Se connecter</h1>
        <small>
          Si vous etes pas inscris ? <Link to="/signup">Inscrivez vous</Link>
        </small>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label>Email</label>
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
          <fieldset>
            <label>Password</label>
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
