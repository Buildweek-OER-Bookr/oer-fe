import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import OERBookr from './App';
import GlobalStyles from './globalStyles';
//import * as serviceWorker from './serviceWorker';

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
	<Router>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<OERBookr />
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
