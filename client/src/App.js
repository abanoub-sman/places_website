import './App.css';
import React from 'react';
import Users from './user/pages/users.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace.js';
export default function App() {
  return (
   <Router>
    <Switch>
    <Route path="/" exact>
      <Users/>
    </Route>
    <Route path="/NewPlace" exact>
      <NewPlace/>
    </Route>
    <Redirect to="/"/>
   </Switch>  
   </Router>
  );
}