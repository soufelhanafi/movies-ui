import React from "react";
import {Layout} from "antd";
import {Route, Redirect} from "react-router-dom";

import Menu from "../../components/menu/index";
import TopBar from "../../components/topBar/index";

import "antd/es/layout/style/css";
import "./styles.scss";
// import logo from "assets/images/login-form-background.jpeg";

const {Content} = Layout;

class MainView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			isReload: true
		};
	}

	render() {
		const {component: Component, routes, ...rest} = this.props;
		return (
			<Layout className="ant-layout">
				<Menu routes={routes} />
				<Layout>
					<TopBar />
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 280
						}}
					>
						<Route
							render={props =>
								rest.isLogged ? (
									<Component {...props} />
								) : (
									<Redirect to="/login" />
								)
							}
						/>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default MainView;
