import {
	// LOGIN__START,
	// LOGIN__SUCCESS,
	// LOGIN__FAILURE,

	// REGISTER__START,
	// REGISTER__SUCCESS,
	// REGISTER__FAILURE,
	UPDATE_HEADER_LOGIN,
	FETCH_BOOKS_START,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_FAILURE,
	DELETE_BOOKS_START,
	DELETE_BOOKS_SUCCESS,
	DELETE_BOOKS_FAILURE,
	FETCH_REVIEW_START,
	FETCH_REVIEW_SUCCESS,
	FETCH_REVIEW_FAILURE,
	DELETE_REVIEW_START,
	DELETE_REVIEW_SUCCESS,
	DELETE_REVIEW_FAILURE,
	ADD_REVIEW_START,
	ADD_REVIEW_SUCCESS,
	ADD_REVIEW_FAILURE,
	SEARCH_INPUT_CHANGE
} from "../actions";

const initialState = {
	menu: [
		{
			name: 'Home',
			url: '/dashboard',
		},
		{
			name: 'Book List',
			url: '/books',
		},
		{
			name: (localStorage.getItem("user_id") > 0 ? 'Logout' : 'Login'),
			url: (localStorage.getItem("user_id") > 0 ? '/logout' : '/login'),
		}
	],
	contacts: [
		{
			url: 'https://twitter.com/oerbookr',
			type: 'twitter'
		},
		{
			url: 'https://www.linkedin.com/in/oerbookr',
			type: 'linkedin'
		},
		{
			url: 'https://github.com/orgs/Buildweek-OER-Bookr/',
			type: 'github'
		},
	],
	books: [],
	search: "",
	error: "",
	//reviews: [],
	//review: "",
	//book_id:null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_HEADER_LOGIN:
			//console.log('updateHeader');
			return {
				...state,
				menu: [
					{
						name: 'Home',
						url: '/dashboard',
					},
					{
						name: 'Book List',
						url: '/books',
					},
					{
						name: (localStorage.getItem("user_id") > 0 ? 'Logout' : 'Login'),
						url: (localStorage.getItem("user_id") > 0 ? '/logout' : '/login'),
					}
				], 
				error: "",
			};
		case FETCH_BOOKS_START:
			return {
				...state,
				error: ""
			};
		case FETCH_BOOKS_SUCCESS:
			//console.log("action pay:  ", action.payload);
			return {
				...state,
				books: [...action.payload],
				error: ""
			};
		case FETCH_BOOKS_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case DELETE_BOOKS_START:
			return {
				...state,
				error: ""
			};
		case DELETE_BOOKS_SUCCESS:
			return {
				...state,
				// books: [...state.books, action.payload],
				error: ""
			};
		case DELETE_BOOKS_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case FETCH_REVIEW_START:
			return {
				...state,
				error: ""
			};
		case FETCH_REVIEW_SUCCESS:
			//console.log("action pay:  ", action.payload);
			return {
				...state,
				review: [...action.payload],
				error: ""
			};
		case FETCH_REVIEW_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case ADD_REVIEW_START:
			return {
				...state,
				error: ""
			};
		case ADD_REVIEW_SUCCESS:
			return {
				...state,
				// review: [...state.review, action.payload],
				error: ""
			};
		case ADD_REVIEW_FAILURE:
			return {
				...state,
				isAddingReview: false,
				error: action.payload
			};
		case DELETE_REVIEW_START:
			return {
				...state,
				error: ""
			};
		case DELETE_REVIEW_SUCCESS:
			return {
				...state,
				// review: [...state.review, action.payload],
				error: ""
			};
		case DELETE_REVIEW_FAILURE:
			return {
				...state,
				error: action.payload
			};
			case SEARCH_INPUT_CHANGE:
					return {
						...state,
						search: action.payload
					};
			
		default:
			return state;
	}
};
