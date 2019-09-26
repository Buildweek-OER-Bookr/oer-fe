import { createGlobalStyle } from 'styled-components';
import './fonts/oerbookr.css';
export default createGlobalStyle`
	@import url(${props => props.theme.preload.semanticui});
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Lato:300,400&display=swap');
	:root {
		font-size: 70%;
		@media screen and (min-width: 480px) {
			font-size: 80%;
		}
		@media screen and (min-width: 720px) {
			font-size: 100%;
		}
		@media screen and (min-width: 1280px) {
			font-size: 90%;
		}
		@media screen and (min-width: 1366px) {
			font-size: 100%;
		}
	}
	* {
		box-sizing: border-box;
		outline: 0;
	}
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		color: ${props => props.theme.black};
		font-family: ${props => props.theme.fonts.lato};
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button:not(:disabled) {
		cursor: pointer;
	}
	
	h1, h2, h3, h4 {
		color: ${props => props.theme.darkblue};
		font-family: ${props => props.theme.fonts.josefin};
		font-weight: 300;
	}
	h1 {
		margin-left: -0.09em;
		font-size: 5rem;
		padding-bottom: 30px;
	}
	h2 {
		font-size: 2.5rem;
		padding-top: 30px;
		padding-bottom: 15px;
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
	img {
		max-width: 100%;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	.content {
		padding: 50px 25px 75px;
		border-bottom: 1px solid ${props => props.theme.darkblue};
		@media screen and (min-width: 720px) {
			padding: 50px 75px 75px;
		}
		&.noborder {
			border-bottom: none;
		}
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
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
			&:last-child:nth-child(6n + 1), &:last-child:nth-child(6n + 4) {
				grid-column: span 3;
				grid-row: span 1;
			}
		}
	}
	.delete-btn {
		cursor: pointer;
		position: absolute;
		bottom: 20px;
		right: 20px;
		padding: 15px 12px;
		color: ${props => props.theme.white};
		background-color: ${props => props.theme.blue};
		transition: all .33s ease-in-out;
		i, span {
			display: inline-block;
			vertical-align: middle;
		}
		span {
			color: ${props => props.theme.blue};
			white-space: nowrap;
			max-width: 0;
			max-height: 0;
			overflow: hidden;
			transition: max-width .8s cubic-bezier(0, 1, 0, 1) -.1s, max-height .8s cubic-bezier(0, 1, 0, 1) -.1s;
		}
		&:hover {
			color: ${props => props.theme.darkblue};
			background-color: ${props => props.theme.white};
			span {
				color: ${props => props.theme.darkblue};
				max-width: 9999px;
				max-height: 9999px;
				transition: max-width .8s cubic-bezier(.5, 0, 1, 0) 0s, max-height .8s cubic-bezier(.5, 0, 1, 0) 0s;
			}
		}
	}
	.login-flex {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		& > :first-child, & > :last-child {
			flex-basis: 100%;
			max-width: 100%;
		}
		@media screen and (min-width: 1280px) {
			& > :first-child, & > :last-child {
				flex-basis: 50%;
				max-width: 50%;
			}
			& > :last-child {
				border-left: 1px solid ${props => props.theme.darkblue};
			}
		}
	}
	label, input, textarea {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		line-height: 3rem;
	}
	label {
		color: ${props => props.theme.blue};
		font-family: ${props => props.theme.fonts.josefin};
	}
	input, textarea {
		appearance: none;
		padding: 0 15px;
		margin-bottom: 30px;
		color: ${props => props.theme.blue};
		border: 1px solid ${props => props.theme.blue};
		transition: all .33s ease-in-out;
		&:focus {
			border: 1px solid ${props => props.theme.darkblue};
			background-color: ${props => props.theme.white};
		}
	}
	input {
		&::-webkit-input-placeholder {
			opacity: .5;
			color: ${props => props.theme.blue};
		}
		&::-moz-placeholder {
			opacity: .5;
			color: ${props => props.theme.blue};
		}
		&:-ms-input-placeholder {
			opacity: .5;
			color: ${props => props.theme.blue};
		}
	}
	textarea {
		max-width: 100%;
		min-width: 100%;
		max-height: 12rem;
		min-height: 6rem;
		font-size: 1.25rem;
		line-height: 2rem;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	form {
		button {
			padding: 0 15px .05em 15px;
		}
		a {
			display: block;
			margin-top: 30px;
			font-size: 1.25rem;
			line-height: 2rem;
			color: ${props => props.theme.blue};
			text-decoration: underline;
			&:hover {
				color: ${props => props.theme.darkblue};
				text-decoration: underline;
			}
		}
	}
	button {
		appearance: none;
		padding: .05em 20px 0 15px;
		margin-right: 15px;
		border: 1px solid ${props => props.theme.blue};
		background-color: ${props => props.theme.white};
		font-family: ${props => props.theme.fonts.lato};
		color: ${props => props.theme.blue};
		font-size: 1.25rem;
		line-height: 3rem;
		transition: all .33s ease-in-out;
		a {
			color: ${props => props.theme.blue};
			transition: all .33s ease-in-out;
		}
		&:hover {
			color: ${props => props.theme.white};
			background-color: ${props => props.theme.blue};
			a {
				color: ${props => props.theme.white};
			}
		}
	}
	#search {
		margin-bottom: 0;
	}
`;