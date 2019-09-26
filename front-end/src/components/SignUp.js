import React from "react";

const Registration = ({ onSignUp, onChange, form, errors, touched, status, history }) => {
	return (
		<div id="signup" className="content">
			<h1>Sign Up</h1>
			<form onSubmit={onSignUp}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					value={form.name}
					id="name"
					name="name"
					placeholder="Name"
					onChange={onChange}
				/>
				<label htmlFor="signup_username">Username:</label>
				<input
					type="text"
					value={form.username}
					id="signup_username"
					name="username"
					placeholder="Username"
					onChange={onChange}
				/>
				<label htmlFor="signup_password">Password:</label>
				<input
					type="password"
					value={form.password}
					id="signup_password"
					name="password"
					placeholder="Password"
					onChange={onChange}
					autoComplete="new-password"
				/>
				<label htmlFor="password2">Confirm Password:</label>
				<input
					type="password"
					value={form.password2}
					id="password2"
					name="password2"
					placeholder="Password"
					onChange={onChange}
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