import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal';
import { addReview, deleteReview, getData } from "../actions"
// import DeleteBookModal from "./DeleteBook"


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
		position: relative;
		color: ${props => props.theme.black};
		background-color: ${props => props.theme.white};
		border: 1px solid transparent;
		transition: all .33s ease-in-out;
		blockquote {
			position: relative;
			padding: 60px 50px;
			font-size: 1.75rem;
			line-height: 2.25rem;
			text-align: center;
			&:before, &:after {
				position: absolute;
				font-size: 5rem;
				line-height: 5rem;
				font-family: ${props => props.theme.fonts.lato};
				color: ${props => props.theme.darkblue};
			}
			&:before {
				content: "“";
				top: 1rem;
				left: 20px;
			}
			&:after {
				content: "”";
				bottom: -2rem;
				right: 20px;
			}
		}
		.delete-btn {
			top: 0;
			right: 0;
			bottom: auto;
			span {
				color: ${props => props.theme.white};
			}
			&:hover {
				color: ${props => props.theme.white};
				background-color: ${props => props.theme.darkblue};
			}
		}
		.review-author {
			position: absolute;
			bottom: 1.25rem;
			right: 70px;
			color: ${props => props.theme.blue};
			span {
				color: ${props => props.theme.darkblue};
			}
		}
		&:hover {
			border: 1px solid ${props => props.theme.blue};
			.delete-btn {
				color: ${props => props.theme.white};
				background-color: ${props => props.theme.darkblue};
			}
		}
	}
	.stars {
		color: ${props => props.theme.darkblue};
	}
	.book-info {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 20px;
		h4, p, div {
			max-width: 100%;
			flex-basis: 100%;
		}
		@media screen and (min-width: 360px) {
			h4 {
				max-width: 25%;
				flex-basis: 25%;
			}
			p, div {
				max-width: 75%;
				flex-basis: 75%;
			}
		}
	}
	.controllers {
		display: flex;
	}
`;


const Book = (props) => {
	const { match, books, dispatch } = props;
	const book = books.find(book => book.id.toString() === match.params.bookid.toString());
	// cont deleteReview = (id, e) => {
	// 	e.preventDefault();
	// 	deleteReview( id);
	// }
	if (!book) {
		return (
			<div className="content">
				<h1>Loading...</h1>
			</div>
		);
	}

	const addReviewOnSubmit = (e) => {
		e.preventDefault();
		addReview({review:"text", stars:1, reviewer_id:1 , book_id: 1 })(dispatch);
		getData()(dispatch);
		toggleAddReviewModal();
	}

	const deleteReviewOnSubmit = (e) => {
		e.preventDefault();
		setDeleteReviewModal(0);
		if(deleteReviewModal > 0) {
			deleteReview(deleteReviewModal)(dispatch);
			getData()(dispatch);
		}
	}	

	const [reviewModal, setReviewModal] = useState(false);
	const toggleAddReviewModal = (e) => {
		setReviewModal(!reviewModal);
	}

	const [deleteReviewModal, setDeleteReviewModal] = useState(0);
	const toggleDeleteReviewModal = (e, id) => {
		setDeleteReviewModal(id);
	}
	const hideDeleteReviewModal = () => {
		setDeleteReviewModal(0);
	}

	const [deleteBookModal, setDeleteBookModal] = useState(false);
	const toggleDeleteBookModal = (e) => {
		setDeleteBookModal(!deleteBookModal);
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
							{/* <button><i className="icon-trash-empty"></i> Remove</button>
							<DeleteBookModal 
							 id={book.id} history={props.history}
							 /> */}
							{book.reviews.length === 0 ? <button onClick={toggleAddReviewModal}>
								<i className="icon-plus"></i> Add Review
							</button> : null}
							<button onClick={toggleDeleteBookModal}><i className="icon-trash-empty"></i> Remove</button>
						</div>
					</div>
				</div>
			</div>
			{book.reviews.length > 0 ? <div className="content reviews noborder">
				<h2>
					Reviews
					<button onClick={toggleAddReviewModal}><i className="icon-plus"></i> Add Review</button>
				</h2>
				<div className="grid">
					{
						book ? book.reviews.map(review => (
							<div key={review.id} className="grid-item review">
								<blockquote>
									{review.review}
								</blockquote>
								<div className="review-author">review by <span>{review.user}</span></div>
								<div className="delete-btn" onClick={e => toggleDeleteReviewModal(e, review.id)}>
									<i className="icon-trash-empty"></i>
									<span>Delete review</span>
								</div>
							</div>)
						) : null
					}
				</div>
			</div> : null}
			<Modal 
				visible={reviewModal} 
				onClose={toggleAddReviewModal}
				onSubmit={addReviewOnSubmit}
				type="reviewForm" 
				data={book}
			/>
			<Modal 
				visible={deleteReviewModal} 
				onClose={hideDeleteReviewModal}
				onSubmit={deleteReviewOnSubmit}
				type="deleteReview" 
			/>
			<Modal 
				visible={deleteBookModal} 
				onClose={toggleDeleteBookModal}
				type="deleteBook" 
				data={book}
			/>
		</StyledDetails>
	)
};

const mapStateToProps = state => ({ books: state.books })
export default connect(mapStateToProps)(Book);
