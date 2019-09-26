  
import React from "react";
import { Link } from "react-router-dom";

// import { ReviewList } from "../ReviewList";

const BookSinglePage = props => {
  const id = Number(props.match.params.id);

  return (
    <div>
      <div className="buttons">
        <Link to={`/book/${book.id}/addreview`}>
          <Button>Write a Review</Button>
        </Link>
        <Button onClick={e => props.handleDeleteBook(e, id)}>
          Delete Book
        </Button>
      </div>
      <div className="book-body">
        <div className="book-text">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.publisher}</p>
          <p>{book.description}</p>
        </div>

        <img src={book.image} alt={book.title} />
      </div>
      {/* <ReviewList /> */}
    </div>
  );
};

export default BookSinglePage;