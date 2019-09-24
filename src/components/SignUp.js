import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const Login = (props) => {
	const { history } = props;

	const onSubmitLogin = (e) => {
		e.preventDefault();
		console.log('prevent submit');
		history.push('/login');
	}
	return (
		<div className="signup">
			<h1>Create account</h1>
			<Form onSubmit={onSubmitLogin}>
				<Form.Item label="Username">
					<Input type="text" />
				</Form.Item>
				<Form.Item label="Password">
					<Input type="password" />
				</Form.Item>
				<Form.Item label="Confirm Password">
					<Input type="password" />
				</Form.Item>
				<Button type="primary" htmlType="submit">Create account</Button>
				<Link to="/login"><Button style={{ marginLeft: 8 }}>Login</Button></Link>
			</Form>
		</div>
	)
};

export default Login;
