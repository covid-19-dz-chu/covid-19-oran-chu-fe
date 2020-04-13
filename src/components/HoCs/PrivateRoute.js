import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useUser } from '../../hooks'

function PrivateRoute({ children, ...rest }) {
  const userCtx = useUser()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userCtx.isAuthenticated ? (
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

export default observer(PrivateRoute)
