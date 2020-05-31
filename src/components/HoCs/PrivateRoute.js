import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.app.isAuthenticated,
});

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAuthenticated ? <Component {...props}/>  : <Redirect to="/login" />
      }
    />
  );
}

export default connect(mapStateToProps, null)(PrivateRoute);
