import React from 'react';
import styled from 'styled-components';
//import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import { Route, Link } from 'react-router-dom';
import { Header, Login, SignUp, Dashboard, Book } from './components';

//import SignUp from './components/SignUp';
//import Book from './components/Book';

//const { Option } = Select;
const StyledApp = styled.div`
	main {
		position: relative;
		margin-left: auto;
		max-width: calc(100% - 250px);
	}
`;

const App = () => {
	return (
		<StyledApp>
			<Header />
			<main>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/dashboard/:bookid" component={Book} />
			</main>
		</StyledApp>
	);
};

export default App;