import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

import { connect } from 'react-redux';
const StyledHeader = styled.header`
	position: fixed;
	z-index: 11;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 0 25px;
	display: flex;
	flex-flow: row nowrap;
	background-color: ${props => props.theme.white};
	@media screen and (min-width: 720px) {
		padding: 0 75px;
	}
	@media screen and (min-width: 1024px) and (min-height: 600px) {
		padding: 0;
		border-bottom: none;
		flex-flow: column nowrap;
		width: 250px;
		height: 100%;
		border-right: 1px solid ${props => props.theme.blue};
	}
	.logo {
		padding: 10px 20px 10px 0px;
		width: 100%;
		max-width: 80px;
		flex-basis: 80px;
		@media screen and (min-width: 1024px) and (min-height: 600px) {
			padding: 20px;
			max-width: 100%;
			flex-basis: auto;
		}
	}
	.menu {
		display: flex;
		flex-flow: row nowrap;
		flex-grow: 1;
		font-family: ${props => props.theme.fonts.josefin};
		@media screen and (min-width: 1024px) and (min-height: 600px) {
			flex-flow: column nowrap;
		}
		a {
			font-size: 1rem;
			line-height: 72px;
			white-space: nowrap;
			padding: 8px 10px 0;
			color: ${props => props.theme.blue};
			&.active {
				color: ${props => props.theme.white};
				background-color: ${props => props.theme.blue};
			}
			@media screen and (min-width: 480px) {
				font-size: 1.25rem;
				padding: 8px 20px 0;
			}
			@media screen and (min-width: 1024px) and (min-height: 600px) {
				width: 100%;
				font-size: 1.5rem;
				line-height: 4.5rem;
				padding: 0.5rem 20px 0;
				border-bottom: 1px solid ${props => props.theme.blue};
				&:first-child {
					border-top: 1px solid ${props => props.theme.blue};
				}
			}
		}
	}
	.contacts {
		display: none;
		.list {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
		}
		a {
			flex-grow: 1;
			padding: 0 10px;
			text-align: center;
			color: ${props => props.theme.blue};
			transition: all .33s ease-in-out;
			i:before {
				font-size: 1.25rem;
				line-height: 80px;
			}
			&:hover {
				background-color: ${props => props.theme.blue};
				color: ${props => props.theme.white};
			}
		}
		@media screen and (min-width: 600px) {
			display: block;
		}
		@media screen and (min-width: 1024px) and (min-height: 600px) {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			.list { 
				padding: 0 10px;
				border-top: 1px solid ${props => props.theme.blue};
			}
			a {
				i:before {
					font-size: 1.5rem;
					line-height: 4.5rem;
				}
			}
		}
	}
`;

const Header = (props) => {
	const { header } = props;
	return (
		<StyledHeader>
			<div className="logo">
				<Link to="/dashboard"><img src={logo} alt="OER Bookr" /></Link>
			</div>
			<div className="menu">
				{header.menu.map(page => (
					<NavLink key={page.url} to={page.url} activeClassName="active">{page.name}</NavLink>
				))}
			</div>
			<div className="contacts">
				<div className="list">
					{header.contacts.map(link => <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer">
						<i className={`icon-${link.type}`}></i>
					</a>
					)}
				</div>
			</div>
		</StyledHeader>
	)
}

const mapStateToProps = state => ({ header: state.header });
export default connect(mapStateToProps)(Header);