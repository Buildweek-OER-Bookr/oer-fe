import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";





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
		<>
			<h1>Welcome </h1>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={credentials.username}
					//  id="username" 
					name="username"
					placeholder="Username"
					onChange={handleChange}
				/>
				<input
					type="password"
					value={credentials.password}
					// id="password" 
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default Login;