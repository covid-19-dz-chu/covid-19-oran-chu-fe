import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
  function onSubmit(){
    return;
  }

  return (
    <div>
      <h1>Login page</h1>
      <small>You dont have an account yet ? <Link to="/signup">Singup</Link>
      </small>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>Email</label>
          <input type="text" placeholder="Enter you email"/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input type="password" placeholder="Enter you email"/>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;