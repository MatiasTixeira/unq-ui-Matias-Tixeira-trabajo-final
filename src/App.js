import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {PPTLSCointext} from './context/partida/PPTLSContext';
import React from 'react';
import Partida from '../src/components/Partida';

function App() {

  return (
    <Router>
      <PPTLSCointext>
        <Switch>
          <Route path="/home" Component={Partida}/>
        </Switch>
      </PPTLSCointext>
    </Router>
  );
}

export default App;
