import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Header, Login, Registration, Dashboard, BookList, Book } from './components';
import PrivateRoute from "./components/PrivateRoute";

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
		<StyledApp>f
			<Header />
			<main>
				<Route  path="/login" component={Login} />
				<Route exact path="/signup" component={Registration} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				{/* <PrivateRoute exact path="/dashboard/:bookid" component={BookSinglePage} /> */}
				<PrivateRoute exact path="/dashboard/:bookid" component={Book} />
				{/* <Route path="/book" component={Book.js
				} /> */}
				
	
			</main>
		</StyledApp>
	);
};

export default App;