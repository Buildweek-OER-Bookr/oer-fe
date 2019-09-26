import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DeleteBookModal from "./DeleteBook"
const StyledDetails = styled.div`
	.book {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.column {
			width: 100%;
			max-width: 100%;
			flex-basis: 100%;
			&:last-child {
				padding-top: 5rem;
			}
			img {
				display: block;
				margin: 0 auto;
				object-fit: contain;
				min-height: 300px;
				max-height: 600px;
			}
		}
		@media screen and (min-width: 1280px) {
			.column {
				&:first-child {
					max-width: calc(35% - 20px);
					flex-basis: calc(35% - 20px);
				}
				&:last-child {
					padding-top: 0;
					max-width: calc(65% - 20px);
					flex-basis: calc(65% - 20px);
				}
			}
		}
	}
	.reviews {
		h2 {
			position: relative;
			padding: 0 0 30px;
			button {
				margin-right: 0;
				position: absolute;
				top: 0;
				right: 0;
			}
		}
	}
	.review {
		color: ${props => props.theme.black};
		background-color: ${props => props.theme.white};
		border: 1px solid transparent;
		transition: all .33s ease-in-out;
		padding: 30px 0;
		blockquote {
			position: relative;
			padding: 30px 50px;
			font-size: 1.75rem;
			line-height: 2.25rem;
			text-align: center;
			&:before, &:after {
				position: absolute;
				font-size: 5rem;
				line-height: 0rem;
				font-family: ${props => props.theme.fonts.lato};
				color: ${props => props.theme.darkblue};
			}
			&:before {
				content: "“";
				top: 20px;
				left: 20px;
			}
			&:after {
				content: "”";
				bottom: 0px;
				right: 20px;
			}
		}
		&:hover {
			border: 1px solid ${props => props.theme.blue};
		}
	}
	.stars {
		color: ${props => props.theme.darkblue};
	}
	.book-info {
		display: flex;
		margin-bottom: 20px;
		h4 {
			max-width: 25%;
			flex-basis: 25%;
		}
		p, div {
			max-width: 75%;
			flex-basis: 75%;
		}
	}
	.controllers {
		display: flex;
		padding-bottom: 30px;
	}
	button {
		appearance: none;
		padding: .05em 20px 0 15px;
		margin-right: 15px;
		border: 1px solid ${props => props.theme.blue};
		background-color: ${props => props.theme.white};
		font-family: ${props => props.theme.fonts.lato};
		color: ${props => props.theme.blue};
		font-size: 1.25rem;
		line-height: 3rem;
		transition: all .33s ease-in-out;
		a {
			color: ${props => props.theme.blue};
			transition: all .33s ease-in-out;
		}
		&:hover {
			color: ${props => props.theme.white};
			background-color: ${props => props.theme.blue};
			a {
				color: ${props => props.theme.white};
			}
		}
		
	}
`;


const Book = (props) => {
	const { match, books } = props;
	const book = books.find(book => book.id.toString() === match.params.bookid.toString());
	if (!book) {
		return (
			<div className="content">
				<h1>Loading...</h1>
			</div>
		);
	}
	const ratingToStars = rating => {
		let stars = [];
		let currRating = rating;
		for (let indx = 0; indx < 5; indx++) {
			if (currRating >= 1) {
				stars[indx] = <i key={indx} className="icon-star"></i>;
			} else if (currRating > 0) {
				stars[indx] = <i key={indx} className="icon-star-half"></i>;
			} else {
				stars[indx] = <i key={indx} className="icon-star-empty"></i>;
			}
			currRating -= 1;
		}
		return stars;
	}
	return (
		<StyledDetails>
			<div className="content">
				<h1>{book.title}</h1>
				<div className="book">
					<div className="column">
						<a href={book.access_link} target="_blank" rel="noopener noreferrer">
							<img src={book.thumbnail} alt={book.title} />
						</a>
					</div>
					<div className="column">
						<div className="book-info">
							<h4>Title:</h4>
							<p>{book.title}</p>
						</div>
						<div className="book-info">
							<h4>Summary:</h4>
							<p>{book.description ? book.description : null}</p>
						</div>
						<div className="book-info">
							<h4>Authors:</h4>
							<p>
								{
									book.authors.map((author, i) => (
										<span key={author.id}>
											{author.name}{i !== book.authors.length - 1 ? ', ' : null}
										</span>
									)
									)
								}
							</p>
						</div>
						<div className="book-info">
							<h4>Publisher:</h4>
							<p>{book.publisher}</p>
						</div>
						{book.license ? <div className="book-info">
							<h4>License:</h4>
							<p>{book.license}</p>
						</div> : null}
						<div className="book-info">
							<h4>Tag:</h4>
							<p>{book.tag}</p>
						</div>
						<div className="book-info">
							<h4>Rating:</h4>
							<p className="stars">
								{
									ratingToStars(book.stars)
								}
							</p>
						</div>
						<div className="controllers">
							<button>
								<a href={book.access_link} target="_blank" rel="noopener noreferrer">
									<i className="icon-download"></i> Access Link
								</a>
							</button>
							{book.reviews.length === 0 ? <button><i className="icon-plus"></i> Add Review</button> : null}
							{/* <button><i className="icon-trash-empty"></i> Remove</button> */}
							 <DeleteBookModal 
							 id={book.id} history={props.history}
							 />
						</div>
					</div>
				</div>
			</div>
			{book.reviews.length > 0 ? <div className="content reviews noborder">
				<h2>
					Reviews
					<button><i className="icon-plus"></i> Add Review</button>
				</h2>
				<div className="grid">
					{
						book ? book.reviews.map(review => (
							<div key={review.id} className="grid-item review">
								<blockquote>
									{review.review}
								</blockquote>
							</div>)
						) : null
					}
				</div>
			</div> : null}
		</StyledDetails>
	)
};

const mapStateToProps = state => ({ books: state.books })
export default connect(mapStateToProps)(Book);
