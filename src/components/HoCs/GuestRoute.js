import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    isAuthenticad:true,
  }
}

function GuestRoute({ component : Component , isAuthenticated , ...rest}) {
  return (
    <Route 
      {...rest} 
      render={(props) => !isAuthenticated ? (<Component {...props}/>) : (<Redirect to="/login"/>)}/>
  ) 
}


export default connect(mapStateToProps)(GuestRoute);