import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from './components/navigation'
import controlRetiro from './components/controlRetiro'


function App () {
  return(
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/control" component={controlRetiro} />
      </div>
    </Router>
  );
}

export default App;