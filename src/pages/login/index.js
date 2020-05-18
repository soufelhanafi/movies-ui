import React from "react";
import {connect} from "react-redux";
import {Form, Icon, Input, Button, Checkbox, Row, Col} from "antd";
import userActions from "../../redux/user/actions";
import "./styles.scss";

class Login extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((errors, values) => {
			if (!errors) {
				this.props.dispatch({
					type: userActions.USER_LOGIN,
					payload: {...values}
				});
				// if (
				// 	values.email == "soufian@mail.com" &&
				// 	values.password == "pass_123"
				// ) {
				//
				// }
			}
		});
	};
	render() {
		const {getFieldDecorator} = this.props.form;
		const {showError} = this.props.user;
		return (
			<Row type="flex" justify="center" align="top">
				<Col xs={20} sm={16} md={12} lg={8} xl={6}>
					<div className="form-login">
						<Col span={24} className="login-header">
							<strong>Log to your account!</strong>
						</Col>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
								{getFieldDecorator("email", {
									rules: [
										{type: "email", message: "invalid email!"},
										{required: true, message: "Please input your username!"}
									]
								})(
									<Input
										prefix={
											<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />
										}
										placeholder="Username"
									/>
								)}
							</Form.Item>
							<Form.Item className="password">
								{getFieldDecorator("password", {
									rules: [
										{required: true, message: "Please input your Password!"}
									]
								})(
									<Input
										prefix={
											<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />
										}
										type="password"
										placeholder="Password"
									/>
								)}
							</Form.Item>
							<Row>
								<Col span={12}>
									<Form.Item>
										{getFieldDecorator("remember", {
											valuePropName: "checked",
											initialValue: true
										})(<Checkbox>Remember me</Checkbox>)}
									</Form.Item>
								</Col>
								<Col span={12} className="forgot-password">
									<a className="login-form-forgot" href="">
										Forgot password?
									</a>
								</Col>
							</Row>

							<Row type="flex" justify="center" align="top">
								{showError && (
									<Col>
										<p className="error-message">
											Your password or email is not correct
										</p>
									</Col>
								)}
								<Col span={16} className="submit-container">
									<Button
										className="submit-button"
										type="primary"
										htmlType="submit"
									>
										Log in
									</Button>
								</Col>
								<Col span={24} className="register-button">
									Or <a href="">Sign Up now!</a>
								</Col>
							</Row>
						</Form>
					</div>
				</Col>
			</Row>
		);
	}
}

const NormalLogin = Form.create({name: "normal_login"})(Login);

function mapStateToprops(state) {
	return state;
}
export default connect(mapStateToprops)(NormalLogin);
