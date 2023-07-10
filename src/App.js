import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {partida} from './components/partida';
import {PPTLSCointext} from './context/partida/PPTLSContext';
import React from 'react';


function App() {

  return (
    <Router>
      <PPTLSCointext>
        <Switch>
          <Route path="/home" Component={partida}/>
        </Switch>
      </PPTLSCointext>
    </Router>
  );
}

export default App;
