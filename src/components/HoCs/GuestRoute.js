import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated || false,
});

function GuestRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashbord" />
        )
      }
    />
  );
}

export default connect(mapStateToProps, {})(GuestRoute);
