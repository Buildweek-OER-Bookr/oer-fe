import React, { useState, useContext, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from "formik";
//import { Form as SemanticForm, Segment, Button, Grid, Header, Image, Message } from "semantic-ui-react";
import * as yup from "yup";
// import logo from '../images/logo.png';


const Registration = ({ errors, touched, status, history }) => {
	//   const authContext = useContext(AuthContext);
	//   const { register, isAuthenticated, userInfo } = authContext;

	//   useEffect(() => {
	//     if (status) {
	//       register(status);
	//       history.push("/Dashboard");
	//     }

	//     if (isAuthenticated) {
	//       if (userInfo && userInfo.userRoles.length > 1) {
	//         history.push("/Dashboard");

	//     }
	//   }, [status]);

	
	const [credentials, setCredentials] = useState({
		name: "",
		username: "",
		password: "",
		password2: ""
	});

	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		axiosWithAuth()
			.post(`auth/register`, credentials)
			.then(res => {
				console.log(res);
				//localStorage.setItem("token", res.data.payload);
				//history.push("/dashboard");
			})
			.catch(err => console.log("register error", err));
		setCredentials({ name: '', username: '', password: '', password2: '' })

	};
	return (
		<div id="signup" className="content">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					value={credentials.name}
					id="name"
					name="name"
					placeholder="Name"
					onChange={handleChange}
				/>
				<label htmlFor="signup_username">Username:</label>
				<input
					type="text"
					value={credentials.username}
					id="signup_username"
					name="username"
					placeholder="Username"
					onChange={handleChange}
				/>
				<label htmlFor="signup_password">Password:</label>
				<input
					type="password"
					value={credentials.password}
					id="signup_password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					autoComplete="new-password"
				/>
				<label htmlFor="password2">Confirm Password:</label>
				<input
					type="password"
					value={credentials.password2}
					id="password2"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					autoComplete="new-password"
				/>
				<button type="submit">Sign Up</button>
				<a href="#login">Already have an account? Login here!</a>
			</form>
		</div>
	);
};
/*
const FormikRegistration = withFormik({
	mapPropsToValues: ({
		name,
		username,
		password,
		password2
	}) => {
		return {
			name: name || "",
			username: username || "",
			password: password || "",
			password2: password2 || ""
		};
	},

	validationSchema: yup.object().shape({
		name: yup
			.string()
			.required("You must provide a name.")
			.min(2, "Your name must be at least 2 characters long."),
		username: yup
			.string()
			.required("You must provide a username.")
			.min(5, "Your username must be at least 5 characters long."),
		password: yup
			.string()
			.required("You must provide a password.")
			.min(6, "Your password must be at least 6 characters long."),
		password2: yup
			.string()
			.required("You must confirm your password.")
			.oneOf([yup.ref("password")], "The passwords do not match.")
	}),


})(Registration);

export default FormikRegistration;
*/
export default Registration;