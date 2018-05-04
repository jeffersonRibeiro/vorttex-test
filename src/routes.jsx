import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search" component={SearchPage} />
  </Switch>
);
