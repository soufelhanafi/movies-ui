/* eslint-disable class-methods-use-this */
import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import Dashboard from "./pages/dashboard";
import Movies from "./pages/movies";
import Login from "./pages/login";
import ConnectedMainRoutes from "./layouts";

const routes = [
	{
		path: "/dashboard",
		component: Dashboard,
		title: "Dashboard",
		icon: "fa fa-chart-line",
		type: "menuLeft"
	},
	{
		path: "/movies",
		component: Movies,
		title: "Movies",
		icon: "fa fa-video-camera",
		type: "menuLeft"
	},
	{
		path: "/update-password",
		component: Login,
		title: "Login",
		icon: "fa fa-login",
		type: "profilMenu"
	},
	{
		path: "/login",
		component: Login,
		title: "Login",
		icon: "fa fa-login",
		type: "public"
	}
];
class Router extends React.Component {
	render() {
		const {history} = this.props;
		return (
			<ConnectedRouter history={history}>
				<Switch>
					{routes.map(route => {
						return (
							<ConnectedMainRoutes
								key={route.path}
								component={route.component}
								path={route.path}
								exact
								type={route.type}
								routes={routes}
							/>
						);
					})}
				</Switch>
			</ConnectedRouter>
		);
	}
}

export default Router;
