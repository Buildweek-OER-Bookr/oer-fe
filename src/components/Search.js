
  import React, { Component } from "react";
import { connect } from "react-redux";

import { search } from "../actions";

class Search extends Component {
  state = {
    searchInput: ""
  };

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  searchBooks = () => {
    this.props.Search(this.state.searchInput);

    this.setState({
      searchInput: ""
    });
  };
  render() {
    return (
      div>
        <Input
          className="search-input"
          type="text"
          value={props.searchInput}
          placeholder="search book title"
          onChange={props.handleChange}
        />
        // <Button onClick={props.searchBooks}>Search</BButton>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: state.booksReducer.books
});

export default connect(
  mapStateToProps,
  { search }
)(Search);


//   import React, { Component } from "react";
// import { searchOnChange, itemSearch, getBooks } from "../actions";

// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "./home.css";

// class Home extends Component {
//   state = {
//     dropdownOpen: false
//   };

//   toggle = e => {
//     e.preventDefault();
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   };

//   componentDidMount() {
//     this.fetchBooks();
//   }

//   fetchBooks = () => {
//     let options = {};
//     if (localStorage.getItem("jwt")) {
//       options = {
//         headers: {
//           Authorization: localStorage.getItem("jwt")
//         }
//       };
//     }
//     this.props.getBooks(options);
//   };

//   componentDidUpdate(prevProps) {
//     if (this.props.books.length === 0) {
//       localStorage.removeItem("jwt");
//       this.props.updateLogin();
//     }
//   }

//   searchOnChange = e => {
//     this.props.searchOnChange(e.target.value);
//     this.props.itemSearch(
//       this.props.books.filter(book =>
//         book.title.toLowerCase().includes(e.target.value.toLowerCase())
//       )
//     );
//   };

//   chosenOne = value => {
//     if (value === "All") {
//       this.props.itemSearch(this.props.books);
//     } else {
//       this.props.itemSearch(
//         this.props.books.filter(book =>
//           book.subject.toLowerCase().includes(value.toLowerCase())
//         )
//       );
//     }
//   };

//   select = e => {
//     this.chosenOne(e.currentTarget.textContent);
//   };

//   logOut = e => {
//     localStorage.removeItem("jwt");
//     this.props.updateLogin();
//   };

//   render() {
//     return (
//       <div className="search-div">
//         <Link to="/" onClick={this.fetchBooks}>
//           <h1 className="home">Home</h1>
//         </Link>
//         <div className="mobile">
//           <input
//             className="search-title"
//             type="text"
//             placeholder="Search by title"
//             value={this.props.search}
//             onChange={e => this.searchOnChange(e)}
          
//           />

//         </div>

//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   books: state.books,
//   search: state.search
// });

// export default connect(
//   mapStateToProps,
//   { searchOnChange, itemSearch, getBooks }
// )(Home);