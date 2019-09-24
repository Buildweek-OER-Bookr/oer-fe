import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const Login = (props) => {
	const { history, location, match } = props;

	const onSubmitLogin = (e) => {
		e.preventDefault();
		console.log('prevent submit');
		history.push('/dashboard');
	}
	return (
		<div className="login">
			<Form onSubmit={onSubmitLogin}>
				<Form.Item label="Username">
					<Input type="text" />
				</Form.Item>
				<Form.Item label="Password">
					<Input type="text" />
				</Form.Item>
				<Button type="primary" htmlType="submit">Login</Button>
				<Link to="/signup"><Button style={{ marginLeft: 8 }}>Sign up</Button></Link>
			</Form>
		</div>
	)
};

export default Login;
