import React from 'react';
import BookList from "./BookList";
import { connect } from 'react-redux';
import { Input } from 'antd';
const { Search } = Input;

const Dashboard = (props) => {
	const { dispatch, search } = props;
	const onSearch = text => {
		console.log('searching:', text);
	}
	return (
		<>
			<div className="content">
				<h1>Introduction @</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est deserunt nihil rerum illo ut, nesciunt repellendus. Aliquam possimus quae totam adipisci perspiciatis debitis tempora expedita voluptatum odio, sapiente id.</p>

				<h2>Search by book title, author, publisher or tag</h2>
				<Search
					enterButton
					onSearch={onSearch}
					placeholder="Search here"
				/>
			</div>
			<BookList />
		</>
	)
};

const mapStateToProps = state => ({ search: state.search })
export default connect(mapStateToProps)(Dashboard);
