import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="email">
        Email
        <input name="email" type="email" value={email} onChange={handleEmail} />
      </label>
      <br />
      <label htmlFor="password">
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
