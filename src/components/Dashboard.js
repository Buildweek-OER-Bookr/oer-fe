import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const Dashboard = (props) => {
	const { history, location, match } = props;

	return (
		<div className="dashboard">
			<h1>Dashboard</h1>
		</div>
	)
};

export default Dashboard;
