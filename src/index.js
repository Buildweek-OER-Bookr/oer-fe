import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { ThemeProvider } from 'styled-components';
import OERBookr from './App';
import GlobalStyles from './globalStyles';
import {reducer} from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const theme = {
	fonts: {
		josefin: "'Josefin Sans', sans-serif",
		playfair: "'Playfair Display', 'Josefin Sans', sans-serif",
	},
	gray: 'rgba(85, 91, 110, 1)',
	darkblue: 'rgba(0, 63, 145, 1)',
	blue: 'rgba(107, 127, 215, 1)',
	white: 'rgba(244, 250, 255, 1)',
	black: 'rgba(8, 9, 10, 1)',
}

ReactDOM.render(
	<Provider store={store}>
	<Router>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<OERBookr />
		</ThemeProvider>
	</Router>
	</Provider>,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
