import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './containers/HomePage';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);
