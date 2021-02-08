import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from './components/HomeView/HomeView';
import { Houses } from './components/Houses/Houses';
import './index.css';

export const App = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <HomeView />
      </Route>
      <Route path={'/houses'}>
        <Houses />
      </Route>
    </Switch>
  );
}