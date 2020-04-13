import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../HoCs/ErrorBoundary'
import PrivateRoute from '../HoCs/PrivateRoute'
import Container from './Container'
import { Login, Home, Dashboard } from '../pages'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Container>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ErrorBoundary>
  )
}

export default App
