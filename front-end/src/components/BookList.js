import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
			font-size: 1rem;
			line-height: 1.25rem;
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
	const { books, search } = props;
	const searchedBooks = search ? books.filter(book => {
		let authors = false;
		book.authors.forEach(author => {
			if(!authors) authors = author.name.includes(search)
		});
		return book.title.includes(search) || book.publisher.includes(search) || authors
	}) : books;
	return (
		<StyledBooks className="content noborder">
			<h1>Book List</h1>
			<div className="grid books">
				{
					searchedBooks.map(book => <Link key={book.id} to={`/books/${book.id}`} className="grid-item book">
						<h4>{book.title}</h4>
						<p>Written by {
							book.authors.map((author, i) => (
									<span key={author.id}>
										{author.name}{i !== book.authors.length - 1 ? ', ' : null}
									</span>
								)
							)
						}</p>
						<p>Published by {book.publisher}</p>
						{book.license ? <p>License {book.license}</p> : <p>No license</p>}
					</Link>)
				}
			</div>
		</StyledBooks>
	)
};

const mapStateToProps = state => ({ books: state.books, search: state.search });
export default connect(mapStateToProps)(BookList);
