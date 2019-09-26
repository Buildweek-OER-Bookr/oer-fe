import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBooks = styled.div`
	h4 {
		padding-bottom: 15px;
	}
	.book-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: minmax(30px, auto);
		grid-gap: 30px 30px;
	}
	.book {
		padding: 30px;
		transition: all .33s ease-in-out;
		color: ${props => props.theme.black};
		border: 1px solid ${props => props.theme.blue};
		background-color: ${props => props.theme.white};
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
		p {
			font-size: 1.25rem;
			line-height: 1.7rem;
		}
		h4, p {
			transition: all .33s ease-in-out;
		}
		&:hover {
			background-color: ${props => props.theme.blue};
			h4, p {
				color: ${props => props.theme.white};
			}
		}
	}
`;

const Dashboard = (props) => {
	//const { history, location, match } = props;
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
		<StyledBooks className="container noborder">
			<h1>Book List</h1>
			<div className="book-list">
				{
					books.map(book => <Link key={book.id} to={`/booklist/${book.id}`} className="book">
						<h4>{book.title}</h4>
						<p>{book.desc}</p>
					</Link>)
				}
			</div>
		</StyledBooks>
	)
};

export default Dashboard;
