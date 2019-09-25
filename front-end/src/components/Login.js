// import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { Form, Input, Button } from 'antd';
import 'semantic-ui-css/semantic.min.css';
// import axiosWithAuth from "../axiosWithAuth";


// const Login = (props) => {
// 	const { history, location, match } = props;

// 	const onSubmitLogin = (e) => {
// 		e.preventDefault();
// 		console.log('prevent submit');
// 		history.push('/dashboard');
// 	}
// 	return (
// 		<div className="login">
// 			<Form onSubmit={onSubmitLogin}>
// 				<Form.Item label="Username">
// 					<Input type="text" />
// 				</Form.Item>
// 				<Form.Item label="Password">
// 					<Input type="text" />
// 				</Form.Item>
// 				<Button type="primary" htmlType="submit">Login</Button>
// 				<Link to="/signup"><Button style={{ marginLeft: 8 }}>Sign up</Button></Link>
// 			</Form>
// 		</div>
// 	)
// };

// export default Login;

import React, { useState } from "react";


const Login = ({ history }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
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
        setCredentials({ username:'', password:'' })

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
