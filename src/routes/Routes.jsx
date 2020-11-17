import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Register from '../Pages/Register';
import Dashboard from '../Pages/Dashboard';

import '../App.css'
import '../Style/navbar.css'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;