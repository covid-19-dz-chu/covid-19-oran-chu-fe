import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import Synthesis from './sections/Synthesis';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashbord Page</h1>
        <Switch>
        <Route exact path="" component={Synthesis}/>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
