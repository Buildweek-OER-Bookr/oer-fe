import React from 'react';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
const { Search } = Input;

const StyledDashboard = styled.div`
	.container {
		padding: 50px 75px;
		border-bottom: 1px solid ${props => props.theme.darkblue};	
	}
	h1 {
		padding-bottom: 30px;
	}
	h2 {
		padding-top: 30px;
		padding-bottom: 15px;
	}
	h4 {
		padding-bottom: 15px;
	}
	.book-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(6,minmax(30px, auto));
		/* grid-template-areas: 
			"book1 book2 book2"
			"book1 . ."
			"book1 book3 book3"
			". . ."
			"book4 book4 book6"
			". . book6"
			"book5 book5 book6"; */
		grid-gap: 30px 30px;
	}
	.book {
		
		padding: 30px;
		transition: all .33s ease-in-out;
		border: 1px solid ${props => props.theme.blue};
		p {
			font-size: 1.25rem;
		}
		&:hover {
			background-color: ${props => props.theme.white};
			p {
				color: ${props => props.theme.black};
			}
		}
		
		grid-column: span 2;
		grid-row: span 1;
		&:nth-child(6n + 1) {
			grid-column: span 1;
			grid-row: span 2;
		}
		&:nth-child(6n + 5) {
			grid-column: span 1;
			grid-row: span 2;
		}
	}
`;

const Dashboard = (props) => {
	const { history, location, match } = props;
	const books = [
		{
			id: 1,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		},
		{
			id: 2,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		},
		{
			id: 3,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		},
		{
			id: 4,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		},
		{
			id: 5,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		},
		{
			id: 6,
			title: 'Book Title Here',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sit aspernatur voluptas consequatur cupiditate dignissimos ducimus eum explicabo, in aperiam aliquam. Perspiciatis culpa dolor laboriosam quisquam provident, laborum nihil eum!'
		}
	];
	return (
		<StyledDashboard>
			<div className="container">
				<h1>Dashboard</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est deserunt nihil rerum illo ut, nesciunt repellendus. Aliquam possimus quae totam adipisci perspiciatis debitis tempora expedita voluptatum odio, sapiente id.</p>

				<h2>Search by book title</h2>
				<Search
					enterButton
					onSearch={search => console.log(search)}
					placeholder="Search by book title"
				/>
			</div>
			<div className="container">
				<h1>Book List</h1>
				<div className="book-list">
					{
						books.map(book => <Link key={book.id} to={`/dashboard/${book.id}`} className="book">
							<h4>{book.title}</h4>
							<p>{book.desc}</p>
						</Link>)
					}
				</div>
			</div>
		</StyledDashboard>
	)
};

export default Dashboard;
