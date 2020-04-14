import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import ErrorBoundary from '../HoCs/ErrorBoundary';
import PrivateRoute from '../HoCs/PrivateRoute';
import GuestRoute from '../HoCs/GuestRoute';
import Dashbord from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Singup from '../pages/Singup';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Singup}/>
          <PrivateRoute path="/dashbord">
            <Dashbord/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
