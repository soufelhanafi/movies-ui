/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import React from "react";
import {Menu, Layout} from "antd";
import {Link} from "react-router-dom";
import imgsrc from "../../../src/assets/images/movies-logo.png";
import styles from "./style.module.scss";

const {Sider} = Layout;

class WebMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const {routes} = this.props;
		const {collapsed} = this.state;

		return (
			<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.toggle}
				className={
					collapsed
						? styles.mainSliderCollapsed + " mainSliderCollapsed"
						: styles.mainSlider + " mainSlider"
				}
			>
				<img src={imgsrc} className={styles.image_logo} />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
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

export default WebMenu;
