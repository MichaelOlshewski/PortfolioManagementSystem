import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Dashboard from './pages/dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
      <button className="btn">Log In!</button>
      <Router>
        <div>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </div>
      <Link to="/dashboard" className="btn">Dashboard</Link>
      </Router>
    </div>
  )
}

export default App;
