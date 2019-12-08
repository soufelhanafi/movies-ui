/* eslint-disable class-methods-use-this */
import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
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
    type: 'menuLeft'
  },
  {
    path: '/movies',
    component: Movies,
    title: 'Movies',
    icon: 'fa fa-video-camera',
    type: 'menuLeft'
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    icon: 'fa fa-login',
    type: 'public'
  },
  {
    path: '/update-password',
    component: Login,
    title: 'Login',
    icon: 'fa fa-login',
    type: 'profilMenu'
  }
];
class Router extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    );
  }
}

export default Router;
