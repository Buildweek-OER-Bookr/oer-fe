import React from 'react';
// import styled from 'styled-components';
// import { addReview, getData, getReviews } from '../../store/actions';

// const StyledDetails = styled.div`
// 	.book {
		
// 	}
// 	.reviews {

// 	}
// `;


// const Book = (props) => {
// 	//const { history, location, match } = props;
// 	const book = props.books.find(book => book.id === id);
// 	return (
// 		<StyledDetails>
// 			<div className="buttons">
//         <Link to={`/book/${id}/review`}>
//           <Button>Write a Review</Button>
//         </Link>
//         <Button onClick={e => props.handleDeleteBook(e, id)}>
//           Delete Book
//         </Button>
//       </div>

//         <img src={book.image}  />
//       </div>
// 	  <Review {...props} />

// 		</StyledDetails>
// 	)
// };


const Book = props => {
	  const id = getdata(props.match.params.id);
	  const book = props.books.find(book => book.id === id);
	
	  return (
	    <div>
	      <div className="buttons">
	        <Link to={`/book/${id}/addreview`}>
	          <Button>Write a Review</Button>
	        </Link>
	        <Button onClick={e => props.handleDeleteBook(e, id)}>
	          Delete Book
	        </Button>
	      </div>
		  <div className="book-body">
         <div className="book-detail">
           <h2>{props.book.title}</h2>
           <h3>{props.book.author}</h3>
           <p>{props.book.publisher}</p>
           <p>{props.book.description}</p>
         </div>

         <img src={props.book.image}  />
       </div>
       {/* <ReviewList /> */}
     </div>
	      
	  );
	};