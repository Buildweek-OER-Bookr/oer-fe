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
	border-right: 1px solid ${props => props.theme.gray};
	.logo {
		padding: 20px;
	}
	.logo + a {
		border-top: 1px solid ${props => props.theme.gray};
	}
	a {
		display: block;
		font-size: 1.5rem;
		line-height: 4.5rem;
		padding: 0.5rem 20px 0;
		border-bottom: 1px solid ${props => props.theme.gray};
	}
`
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
				<img src={logo} alt=""/>
			</div>
			{menuUrls.map(menu => (
				<NavLink key={menu.url} to={menu.url} activeClassName="active">{menu.name}</NavLink>
			))}
		</StyledHeader>
	)
}

export default Header