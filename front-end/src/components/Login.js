import React, { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "./SignUp";
import { updateHeader } from '../actions';
import { connect } from 'react-redux';
// import { Redirect, Link } from 'react-router-dom';

const Login = ({ history, dispatch }) => {
	const [loginForm, setLoginForm] = useState({
		username: "",
		password: "",
		fromSignUp: false
	});
	const [signupForm, setSignupForm] = useState({
		name: "",
		username: "",
		password: "",
		password2: ""
	});

	const handleLoginChange = e => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	};
	const handleSignupChange = e => {
		setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
	};

	const handleLogin = e => {
		if (e !== null) {
			e.preventDefault();
		}
		axios
			.post(`https://oer-bookr.herokuapp.com/api/auth/login`, loginForm)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("user_id", res.data.user_id);
				updateHeader()(dispatch);
				history.push("/dashboard");
			})
			.catch(err => console.log("login error ", err));
		setSignupForm({ username: '', password: '', fromSignUp: false })
	};

	const handleSignUp = e => {
		e.preventDefault();
		const holdForm = signupForm;
		axios
			.post(`https://oer-bookr.herokuapp.com/api/auth/register`, signupForm)
			.then(res => {
				setLoginForm({ username: holdForm.username, password: holdForm.password, fromSignUp: true })
			})
			.catch(err => console.log("register error", err));
		setSignupForm({ name: '', username: '', password: '', password2: '' })
	};
	useEffect(() => {
		if(loginForm.fromSignUp) {
			handleLogin(null)
		}
		return () => { };
	}, [loginForm.fromSignUp])
	return (
		<div className="login-flex">
			<div id="login" className="content">
				<h1>Login</h1>
				<form onSubmit={handleLogin}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						value={loginForm.username}
						id="username"
						name="username"
						placeholder="Username"
						onChange={handleLoginChange}
						autoComplete="username"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						value={loginForm.password}
						id="password"
						name="password"
						placeholder="Password"
						onChange={handleLoginChange}
						autoComplete="current-password"
					/>
					<button type="submit">Login</button>
					<a href="#signup">Don't have an account? Sign up here!</a>
				</form>
			</div>
			<SignUp onSignUp={handleSignUp} onChange={handleSignupChange} form={signupForm} />
		</div>
	);
};

export default connect((state) => ({ ...state }))(Login);