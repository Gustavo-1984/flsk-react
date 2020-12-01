import React from 'react';
import About from './components/About'
import NavBar from './components/NavBar'
import Users from './components/Users'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Users}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
