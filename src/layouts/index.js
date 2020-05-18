import React from "react";
import {connect} from "react-redux";
import MainView from "./private";
import PublicView from "./public";

class MainRoutes extends React.Component {
	render() {
		const {type} = this.props;
		const {isLogged} = this.props.user;
		if (type == "public") {
			return <PublicView isLogged={isLogged} {...this.props} />;
		}
		return <MainView isLogged={isLogged} {...this.props} />;
	}
}

const ConnectedMainRoutes = connect(({user}) => ({user}))(MainRoutes);
export default ConnectedMainRoutes;
