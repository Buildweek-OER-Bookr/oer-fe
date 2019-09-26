
import React from 'react';
import styled from 'styled-components';
import BookList from "./BookList";
import { Input } from 'antd';
const { Search } = Input;

const Dashboard = (props) => {
	//const { history, location, match } = props;
	return (
		<>
		<div className="container">
			<h1>Dashboard</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est deserunt nihil rerum illo ut, nesciunt repellendus. Aliquam possimus quae totam adipisci perspiciatis debitis tempora expedita voluptatum odio, sapiente id.</p>

			<h2>Search by book title</h2>
			<Search
				enterButton
				onSearch={search => console.log(search)}
				placeholder="Search by book title"
				searchBar={this.search}
			/>
		</div>
		<BookList/>

		</>
	)
};

export default Dashboard;
