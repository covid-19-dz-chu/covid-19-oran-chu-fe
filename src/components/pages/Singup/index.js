import React from 'react';
import { Link } from 'react-router-dom';

function Singup(){
  function onSubmit(){
    return;  
  }

  return (
    <div>
      <h1>Signup page</h1>
      <small>You already have an account ? <Link to="/login">Login</Link></small>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="username">Email</label>
          <input type="text" placeholder="Enter you email" value="" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" value=""/>
        </fieldset>
        <fieldset>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" value="" />
        </fieldset>
      </form>
    </div>
  );
}

export default Singup;