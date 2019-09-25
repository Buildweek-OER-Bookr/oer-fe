import { createGlobalStyle } from 'styled-components';
import './fonts/oerbookr.css';
import 'semantic-ui-css/semantic.min.css';
export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Lato:300,400&display=swap');
	#root {
		color: ${props => props.theme.black};
		font-family: ${props => props.theme.fonts.lato};
		h1, h2, h3, h4 {
			font-family: ${props => props.theme.fonts.josefin};
			font-weight: 300;
			margin: 0;
		}
		h1 {
			margin-left: -0.09em;
			font-size: 5rem;
		}
		h2 {
			font-size: 2.5rem;
		}
		h3 {
			font-size: 2.25rem;
			line-height: 5rem;
		}
		h4 {
			font-size: 1.75rem;
		}
		p {
			font-size: 1.5rem;
			line-height: 2rem;
		}
	}
	img {
		max-width: 100%;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	.anticon {
		vertical-align: middle;
	}

	.content {
		padding: 50px 75px 75px;
		border-bottom: 1px solid ${props => props.theme.darkblue};
		&.noborder {
			border-bottom: none;
		}
		h1, h2, h3, h4 {
			color: ${props => props.theme.darkblue};
		}
		h1 {
			padding-bottom: 30px;
			
		}
		h2 {
			padding-top: 30px;
			padding-bottom: 15px;
			&.nopad {
				padding: 0;
			}
		}
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: minmax(10rem, auto);
		grid-gap: 30px 30px;
		@media screen and (min-width: 1280px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	.grid-item {
		grid-column: span 1;
		grid-row: span 1;
		&:nth-child(6n + 1), &:nth-child(6n + 5) {
			grid-column: span 1;
			grid-row: span 1;
		}
		@media screen and (min-width: 1280px) {
			grid-column: span 2;
			grid-row: span 1;
			&:nth-child(6n + 1), &:nth-child(6n + 5) {
				grid-column: span 1;
				grid-row: span 2;
			}
		}
	}
`;