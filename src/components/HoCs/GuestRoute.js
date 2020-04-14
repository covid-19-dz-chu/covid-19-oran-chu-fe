import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

function GuestRoute( isAuthenticated , children ,...rest) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}


export default observer(GuestRoute);