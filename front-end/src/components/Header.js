import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 11;
	width: 250px;
	background-color: ${props => props.theme.white};
	border-right: 1px solid ${props => props.theme.blue};
	.logo {
		padding: 20px;
		& + a {
			border-top: 1px solid ${props => props.theme.blue};
		}
	}
	& > a {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		line-height: 4.5rem;
		padding: 0.5rem 20px 0;
		color: ${props => props.theme.blue};
		border-bottom: 1px solid ${props => props.theme.blue};
		&.active {
			color: ${props => props.theme.white};
			background-color: ${props => props.theme.blue};
		}
	}
	.share {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20px;
	}
`;

const Header = (props) => {
	const menuUrls = [
		{
			name: 'Book List',
			url: '/dashboard',
		},
		{
			name: 'Book Details',
			url: '/dashboard/1',
		},
		{
			name: 'Logout',
			url: '/logout',
		}
	];
	return(
		<StyledHeader>
			<div className="logo">
				<img src={logo} alt="OER Bookr"/>
			</div>
			{menuUrls.map(menu => (
				<NavLink key={menu.url} to={menu.url} activeClassName="active">{menu.name}</NavLink>
			))}
			<div className="share">
				<h3>Share</h3>
				<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
				<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
				<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></a>
			</div>
		</StyledHeader>
	)
}

export default Header