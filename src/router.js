/* eslint-disable class-methods-use-this */
import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import MainView from './layouts/index';
import Dashboard from './pages/dashboard';
import Movies from './pages/movies';
import Login from './pages/login';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    icon: 'fa fa-chart-line',
    type: 'private'
  },
  {
    path: '/movies',
    component: Movies,
    title: 'Movies',
    icon: 'fa fa-video-camera',
    type: 'private'
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    icon: 'fa fa-login',
    type: 'public'
  }
];
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainView routes={routes}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                component={route.component}
                key={index}
              />
            ))}
            <Route render={() => <Redirect to={'/dashboard'} />} />
          </Switch>
        </MainView>
      </BrowserRouter>
    );
  }
}

export default Router;
