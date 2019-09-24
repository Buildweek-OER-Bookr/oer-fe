import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Header, Login, SignUp, Dashboard, BookList, Book } from './components';

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
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/booklist" component={BookList} />
				<Route path="/booklist/:bookid" component={Book} />
			</main>
		</StyledApp>
	);
};

export default App;