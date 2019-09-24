import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700|Playfair+Display&display=swap');
	#root {
		color: ${props => props.theme.black};
		font-family: ${props => props.theme.fonts.josefin};
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

	.content {
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