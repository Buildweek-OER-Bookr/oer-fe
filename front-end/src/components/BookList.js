import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from './../actions/index';

const StyledBooks = styled.div`
	h4 {
		padding-bottom: 15px;
	}
	.book {
		padding: 30px;
		transition: all .33s ease-in-out;
		color: ${props => props.theme.black};
		border: 1px solid ${props => props.theme.blue};
		background-color: ${props => props.theme.white};
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

const BookList = (props) => {
	console.log(props)	
	const { dispatch, books } = props;
	useEffect(() => {
		if(books.length === 0) {
			getData()(dispatch);
		}
		return () => { };
	}, []);
	return (
		<StyledBooks className="content noborder">
			<h1>Book List</h1>
			<div className="grid books">
				{
					books.map(book => <Link key={book.id} to={`/books/${book.id}`} className="grid-item book">
						<h4>{book.title}</h4>
						<p>{book.desc}</p>
					</Link>)
				}
			</div>
		</StyledBooks>
	)
};

const mapStateToProps = state => ({ books: state.books });
export default connect(mapStateToProps)(BookList);
