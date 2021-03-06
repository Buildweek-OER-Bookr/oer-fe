import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from "../actions"

const StyledBooks = styled.div`
	h4 {
		padding-bottom: 15px;
	}
	.book {
		position: relative;
		padding: 30px;
		transition: all .33s ease-in-out;
		color: ${props => props.theme.black};
		border: 1px solid ${props => props.theme.blue};
		background-color: ${props => props.theme.white};
		.delete-btn {
			bottom: 20px;
			right: 20px;
		}
		p {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}
		.moreinfo {
			padding-top: 10px;
			p {	
				padding-top: 10px;
				font-size: 1.1rem;
				color: ${props => props.theme.blue};
			}
		}
		h4, p {
			transition: all .33s ease-in-out;
		}
		&:hover {
			background-color: ${props => props.theme.blue};
			h4, p {
				color: ${props => props.theme.white};
			}
			.delete-btn {
				color: ${props => props.theme.darkblue};
				background-color: ${props => props.theme.white};
			}
		}
	}
`;

const BookList = (props) => {
	const { books, search, dispatch } = props;
	const searchedBooks = search ? books.filter(book => {
		let byAuthors = false;
        book.authors.forEach(author => {
            if (!byAuthors) byAuthors = author.name.includes(search)
        });
        const byTitle = book.title ? book.title.includes(search) : false;
        const byPublisher = book.publisher ? book.publisher.includes(search) : false;
        const byTag = book.tag ? book.tag.includes(search) : false;
        return byTitle || byPublisher || byAuthors || byTag;
	}) : books;
	useEffect(() => {
		if(localStorage.getItem("user_id") > 0 && books.length === 0)  {
			getData(localStorage.getItem("user_id"))(dispatch);
		}
		return () => { };
	}, []);
	return (
		<StyledBooks className="content noborder">
			<h1>Book List</h1>
			<div className="grid books">
				{
					searchedBooks.map(book => <Link key={book.id} to={`/books/${book.id}`} className="grid-item book">
						<h4>{book.title}</h4>
						<p>{book.description}</p>
						<div className="moreinfo">
							<p>Written by {
								book.authors.map((author, i) => (
									<span key={author.id}>
										{author.name}{i !== book.authors.length - 1 ? ', ' : null}
									</span>
								)
								)
							}</p>
							<p>Published by {book.publisher}</p>
						</div>
						{/* <div className="delete-btn" onClick={e => e.preventDefault()}>
							<i className="icon-trash-empty"></i>
							<span>Delete book</span>
						</div> */}
					</Link>)
				}
			</div>
		</StyledBooks>
	)
};

const mapStateToProps = state => ({ books: state.books, search: state.search });
export default connect(mapStateToProps)(BookList);
