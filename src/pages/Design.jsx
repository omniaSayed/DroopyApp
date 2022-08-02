import React from 'react';
import '../src/index.css';
import '../components/NavbarDesignPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Design() {
  return (
    <div className="Design">
      <Router>
        <NavbarDesignPage />
      <Switch>
        <Route path="/" />
      </Switch>
      </Router>
    
    </div>
  )
}
export default Design;