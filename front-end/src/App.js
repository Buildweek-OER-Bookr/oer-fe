import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Header, Login, Registration, Dashboard, BookList, Book } from './components';

import { connect } from 'react-redux';
import { getData } from './actions/index';

const StyledApp = styled.div`
	max-width: 2160px;
	margin: 0 auto;
	main {
		position: relative;
		margin-top: 80px;
		max-height: calc(100vh - 80px);
		@media screen and (min-width: 1024px) {
			margin-top: 0;
			max-height: 100%;
			margin-left: auto;
			max-width: calc(100% - 250px);
		}
	}
`;

const App = (props) => {
	const { dispatch, books } = props;
	useEffect(() => {
		if(books.length === 0) {
			getData()(dispatch);
		}
		return () => { };
	}, []);
	return (
		<StyledApp>
			<Header />
			<main>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Registration} />
				<Route path="/dashboard" component={Dashboard} />
				<Route exact path="/books" component={BookList} />
				<Route path="/books/:bookid" component={Book} />
				{/* <Route path="/bookcard" component={BookCard} /> */}

			</main>
		</StyledApp>
	);
};

const mapStateToProps = state => ({ books: state.books })
export default connect(mapStateToProps)(App);