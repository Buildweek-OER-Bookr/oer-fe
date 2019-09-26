  
import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

// import { ReviewList } from "../ReviewList";
import React, { Component } from "react";
// import Book from "../components/Book";
import {
  getData,
  deleteBook
} from "../actions";


const BookSinglePage = props => {
// //   const id = getdata(props.match.params.id);
// //   const book = props.books.find(book => book.id === id);

//   return (
//     <div>
//       <div className="buttons">
//         <Link to={`/book/${id}/addreview`}>
//           <Button>Write a Review</Button>
//         </Link>
//         <Button onClick={e => props.handleDeleteBook(e, id)}>
//           Delete Book
//         </Button>
//       </div>
//       
//   );
// };



  componentDidMount() {
    // const token = localStorage.getItem(" ");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    if (this.props.books.length === 0) {
      this.props.getBooks(requestOptions);
    }
  }

  handleDeleteBook = (e, id) => {
    e.preventDefault();
    this.props.deleteBook(id);
    this.props.history.push("/books");
  };

  

  render() {
    return (
      <>
        {/* <Book
          {...this.props}
          books={this.props.books}
          handleDeleteBook={this.handleDeleteBook}
          handleEditBook={this.handleEditBook}
        /> */}
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.reducer.books,
  reviews: state.reducer.reviews
});

export default connect(
  mapStateToProps,
  { getdata, deleteBook }
)(BookSinglePage);

