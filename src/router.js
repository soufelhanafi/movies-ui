/* eslint-disable class-methods-use-this */
import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

import MainView from './layouts/index';
import Dashboard from './pages/dashboard';
import Movies from './pages/movies';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    icon: 'fa fa-chart-line'
  },
  {
    path: '/movies',
    component: Movies,
    title: 'Movies',
    icon: 'fa fa-video-camera'
  }
];
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainView routes={routes}>
          {routes.map((route, index) => (
            <Route path={route.path} component={route.component} key={index} />
          ))}
          <Route render={() => <Redirect to={'/dashboard'} />} />
        </MainView>
      </BrowserRouter>
    );
  }
}

export default Router;
