import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Movies from "./pages/movies";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/movies",
    component: Movies
  }
];
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {routes.map((route, index) => {
          return (
            <Route path={route.path} component={route.component} key={index} />
          );
        })}
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </BrowserRouter>
    );
  }
}

export default Router;
