import React from "react";
import {Route, Redirect} from "react-router-dom";

import "./styles.scss";

class PublicView extends React.Component {
	render() {
		const {component: Component, ...rest} = this.props;
		return (
			<Route
				render={props =>
					rest.isLogged ? (
						<Redirect to="/dashboard" />
					) : (
						<Component {...props} />
					)
				}
			/>
		);
	}
}

export default PublicView;
