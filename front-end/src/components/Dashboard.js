import React, { useEffect } from 'react';
import BookList from "./BookList";
import { connect } from 'react-redux';
import { search, getData} from "../actions"

const Dashboard = (props) => {
	const { dispatch } = props;
	const onSearch = e => {
		search(e.target.value)(dispatch);
	}
	useEffect(() => {
		if(localStorage.getItem("user_id") > 0)  {
			getData(localStorage.getItem("user_id"))(dispatch);
		}
		return () => { };
	}, []);
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
					value={props.search}
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
