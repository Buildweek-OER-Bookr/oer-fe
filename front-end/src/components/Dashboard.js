import React from 'react';
import BookList from "./BookList";
import { connect } from 'react-redux';

const Dashboard = (props) => {
	const { dispatch, search } = props;
	const onSearch = e => {
		console.log('searching:', e.target.value);
	}
	return (
		<>
			<div className="content">
				<h1>Introduction</h1>
				<p>OER Bookr is a teacher's source for open educational resources (OER). Picture the Yelp of textbooks, a social platform for peer reviewed, open licensed textbooks.</p>

				<h2>Search by book title, author, publisher or tag</h2>
				<input
					id="search"
					name="search"
					type="text"
					value={search}
					onChange={onSearch}
					placeholder="Search by book title, author, publisher or tag"
				/>
			</div>
			<BookList />
		</>
	)
};

const mapStateToProps = state => ({ search: state.search })
export default connect(mapStateToProps)(Dashboard);
