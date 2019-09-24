import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'Josefin Sans', sans-serif;
		src: url('./fonts/JosefinSans-Regular.ttf');
	}
	@font-face {
		font-family: 'Playfair Display', 'Josefin Sans', sans-serif;
		src: url('./fonts/PlayfairDisplay-Regular.ttf');
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
		font-family: ${props => props.theme.fonts.josefin};
		color: ${props => props.theme.black};
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
	img {
		max-width: 100%;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	h1, h2, h3, h4 {
		font-family: ${props => props.theme.fonts.playfair};
	}
	h1 {
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
	.anticon {
		vertical-align: middle;
	}

	.container {
		padding: 50px 75px 75px;
		border-bottom: 1px solid ${props => props.theme.darkblue};
		&.noborder {
			border-bottom: none;
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
`;