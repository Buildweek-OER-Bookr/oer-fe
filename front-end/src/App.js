import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Header, Login, SignUp, Dashboard, BookList, Book } from './components';

import Registration from "./components/SignUp";

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
				<Route path="/signup" component={Registration} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/dashboard/:bookid" component={Book} />
				{/* <Route path="/bookcard" component={BookCard} /> */}

			</main>
		</StyledApp>
	);
};

export default App;