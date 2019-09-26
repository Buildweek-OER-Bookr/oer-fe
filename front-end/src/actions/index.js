import {axiosWithAuth} from "../axiosWithAuth";
// import { Book } from "../components";

const BASE_URL = "https://oer-bookr.herokuapp.com/api";

// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const REGISTER_START = "REGISTER_START";
// export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FETCH_BOOKS_START = "FETCH_BOOKS_START";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const DELETE_BOOKS_START = 'DELETE_BOOKS_START';
export const DELETE_BOOKS_SUCCESS = 'DELETE_BOOKS_SUCCESS';
export const DELETE_BOOKS_FAILURE = 'DELETE_BOOKS_FAILURE';

export const FETCH_REVIEW_START = "FETCH_REVIEW_START";
export const FETCH_REVIEW_SUCCESS = "FETCH_REVIEW_SUCCESS";
export const FETCH_REVIEW_FAILURE = "FETCH_REVIEW_FAILURE";

export const ADD_REVIEW_START = "ADD_REVIEW_START";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const DELETE_REVIEW_START = "DELETE_REVIEW_START";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILURE = "DELETE_REVIEW_FAILURE";
export const SEARCH_INPUT_CHANGE = "SEARCH_INPUT";	


// export const login = ( history, credentials ) => {
//   return dispatch => {
//     dispatch({ type: LOGIN_START });
//   axios
//   .post( `${BASE_URL}`, credentials)
//   .post( `${BASE_URL}`, credentials)
//   .then(res => {
//     dispatch({ type:  LOGIN_SUCCESS});
//     localStorage.setItem("token", res.data);
//     history.push("/Dashboard");
//   }) 
//   .catch(err => console.log("login error ", err));

// };


// export const register =  ( history, credentials ) => {
//   return dispatch => {
//     dispatch({ type: REGISTER_START });
//     axios
//   .post( `${BASE_URL}`, credentials)
//     .then(res => {
//       dispatch({ type: REGISTER_SUCCESS});
//       localStorage.setItem("token", res.data);
//       history.push("/Dashboard");
//     }) 
//     .catch(err => console.log("login error ", err));

// };


export const getData = (id) => {
	return dispatch => {
		dispatch({ type: FETCH_BOOKS_START });
		const bookList = axiosWithAuth().get(`${BASE_URL}/books`);
		//all the book in database
		const filterList = axiosWithAuth().get(`${BASE_URL}/users/${id}`);
		// user.books = = wishlist -> 2 books
		Promise.all([bookList, filterList])
			.then(([bookListResponse, filterListResponse]) => {
				const excludeBooks = filterListResponse.data.books.map(book => book.id);
				console.log(filterListResponse.data.books);
				const newBookList = bookListResponse.data.filter(book => !excludeBooks.includes(book.id));
				dispatch({ type: FETCH_BOOKS_SUCCESS, payload: newBookList });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: FETCH_BOOKS_FAILURE, payload: err.res });
			});
	};
};


export const deleteData = (data) => {
	return dispatch => {
		dispatch({ type: DELETE_BOOKS_START });
		axiosWithAuth()
			.post(`${BASE_URL}/wishlist`, data)
			.then(res => {
				console.log("book deleted", res);
				dispatch({ type: DELETE_BOOKS_SUCCESS, payload: res.data })
			})
			.catch(error => {
				console.log(" axios request error", error);
				dispatch({ type: DELETE_BOOKS_FAILURE, payload: error.res })
			})
	}
}

// export const getOneBook = id => dispatch => {
// 	axios
// 	  .get(`${BASE_URL}/books/${id}`)
// 	  .then(res => {
// 		dispatch({
// 		  type: FETCH_BOOK_BY_ID,
// 		  payload: res.data.book[0],
// 		  reviews: res.data.reviews
// 		});
// 	  })
// 	  .catch(err => console.log(err));
//   };
export const search = input => {	
	return dispatch => {	
	dispatch({ type: SEARCH_INPUT_CHANGE, payload: input });	
  }	
}

export const addReview = (newReview) => {
	return dispatch => {
		dispatch({ type: ADD_REVIEW_START });
		axiosWithAuth()
			.post(`${BASE_URL}/reviews`, newReview)
			.then(res => {
				console.log(newReview)
				dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log(err)
				dispatch({ type: ADD_REVIEW_FAILURE, payload: err.res });
			});
	};
}


export const getReview = () => {
	return dispatch => {
		dispatch({ type: FETCH_REVIEW_START });
		axiosWithAuth()
			.get(`${BASE_URL}/reviews`)
			.then(res => {
				// axios
			// 	.get(`${BASE_URL}/books/${id}`)
			// 		.then(res => {
			// 		  dispatch({
			// 			type: FETCH_BOOK_BY_ID,
			// 			payload: res.data.book[0],
			// 			reviews: res.data.reviews
			// 		  });
			// 		})
				dispatch({ type: FETCH_REVIEW_SUCCESS, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: FETCH_REVIEW_FAILURE, payload: err.res });
			});
	};
};


export const deleteReview = (id) => {
	return dispatch => {
		dispatch({ type: DELETE_REVIEW_START });
		axiosWithAuth()
			.delete(`${BASE_URL}/reviews/${id}`)
			.then(res => {
			// axios
			// 	.get(`${BASE_URL}/books/${id}`)
			// 		.then(res => {
			// 		  dispatch({
			// 			type: FETCH_BOOK_BY_ID,
			// 			payload: res.data.book[0],
			// 			reviews: res.data.reviews
			// 		  });
			// 		})	
					console.log("REVIEW deleted", res);
				dispatch({ type: DELETE_REVIEW_SUCCESS, payload: res.data })
			})
			.catch(error => {
				console.log(" axios request error", error);
				dispatch({ type: DELETE_REVIEW_FAILURE, payload: error.res })
			})
	}
} 

				
