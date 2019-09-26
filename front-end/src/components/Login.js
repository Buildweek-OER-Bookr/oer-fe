import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
import SignUp from "./SignUp";

const Login = ({ history }) => {

	const [credentials, setCredentials] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		axiosWithAuth()
			.post(`auth/login`, credentials)
			.then(res => {
				localStorage.setItem("token", res.data.payload);
				history.push("/dashboard");
			})
			.catch(err => console.log("login error ", err));
		setCredentials({ username: '', password: '' })

	};
	return (
		<div className="login-flex">
			<div id="login" className="content">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						value={credentials.username}
						id="username" 
						name="username"
						placeholder="Username"
						onChange={handleChange}
						autoComplete="username"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						value={credentials.password}
						id="password" 
						name="password"
						placeholder="Password"
						onChange={handleChange}
						autoComplete="current-password"
					/>
					<button type="submit">Login</button>
					<a href="#signup">Don't have an account? Sign up here!</a>
				</form>
			</div>
			<SignUp />
		</div>
	);
};

export default Login;