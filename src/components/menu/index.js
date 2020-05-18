/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import React from "react";
import {Menu, Layout} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import imgsrc from "../../../src/assets/images/movies-logo.png";
import styles from "./style.module.scss";

const {Sider} = Layout;

class WebMenu extends React.Component {
	render() {
		const {routes, router} = this.props;

		const {collapsed} = this.state;
		const defaultKey = routes.findIndex(
			x => x.path == router.location.pathname
		);

		return (
			<Sider collapsible className={styles.mainSlider + " mainSlider"}>
				<img src={imgsrc} className={styles.image_logo} />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[defaultKey + ""]}
				>
					<div className="logo" />
					{routes.map((item, index) => {
						if (item.type === "menuLeft") {
							return (
								<Menu.Item key={index}>
									<Link to={item.path}>
										<i className={`${item.icon} icons`} />
										{collapsed ? "" : item.title}
									</Link>
								</Menu.Item>
							);
						}
						return null;
					})}
				</Menu>
			</Sider>
		);
	}
}

export default connect(({router}) => ({router}))(WebMenu);
