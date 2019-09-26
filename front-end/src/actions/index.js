import axios from "axios";
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

const configRequest = (method, url, data, token) => {
	return {
		method: method,
		url: url,
		data: data,
		headers: {
			'Authorization': `${token}`,
		},
		json: true
	}
};

export const getData = () => {
	return dispatch => {
		dispatch({ type: FETCH_BOOKS_START });
		axios(configRequest('GET', `${BASE_URL}/books`, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbHF1aSIsImlhdCI6MTU2OTQwMjg3NCwiZXhwIjoxNTY5NDg5Mjc0fQ.VHXAxUCFjeNYqkBcSMZ-QkhEtnuxGoqGBXKKQehEsgY'))
			.then(res => {
				dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: FETCH_BOOKS_FAILURE, payload: err.res });
			});
	};
};


export const deleteData = (id, history) => {
	return dispatch => {
		dispatch({ type: DELETE_BOOKS_START });
		axios
			.delete(`${BASE_URL}/${id}`)
			.then(res => {
				console.log("book deleted", res);
				dispatch({ type: DELETE_BOOKS_SUCCESS, payload: res.data })
				history.push("/books")
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
		axios
			.post(`${BASE_URL}/review`, newReview)
			.then(res => {
				dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: ADD_REVIEW_FAILURE, payload: err.res });
			});
	};
}


export const getReview = () => {
	return dispatch => {
		dispatch({ type: FETCH_REVIEW_START });
		axios
			.get(`${BASE_URL}/review`)
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
		axios
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

				