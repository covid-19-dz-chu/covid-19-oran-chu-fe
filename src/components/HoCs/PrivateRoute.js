import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuthenticated: state.app.isAuthenticated,
});

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        rest.isAuthenticated ? Component : <Redirect to="/login" />
      }
    />
  );
}

export default connect(mapStateToProps, {})(PrivateRoute);
