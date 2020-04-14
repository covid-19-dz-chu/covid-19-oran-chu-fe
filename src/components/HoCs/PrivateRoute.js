import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';


function PrivateRoute({ isAuthenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;
