import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import Synthesis from './sections/Synthesis';
import SynthesisDocument from './sections/SynthesisDoc';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashbord Page</h2>
        <Switch>
          <Route exact path="" component={Synthesis}/>
          <Route exact path="document/" component={SynthesisDocument}/>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
