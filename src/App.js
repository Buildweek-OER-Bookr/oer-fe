import React from 'react';
//import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import { Route, Link } from 'react-router-dom';
import { Login, SignUp, Dashboard, Book } from './components';
//import SignUp from './components/SignUp';
//import Book from './components/Book';

//const { Option } = Select;

const App = () => {

	return (
		<div className="app">
			<header>
				<Link to="/login">Login</Link>
			</header>
			<main>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/dashboard/:bookid" component={Book} />
			</main>
			<footer>

			</footer>
		</div>
	);
};

export default App;