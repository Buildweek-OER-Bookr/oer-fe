import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from "formik";
import { Form as SemanticForm, Segment, Button, Grid, Header,  Image, Message } from "semantic-ui-react";
import * as yup from "yup";
import 'semantic-ui-css/semantic.min.css';
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

  return (
	
	  
    <Grid container centered style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
	  <Header as='h1' color='gray' textAlign='center'>
        {/*<Image src={logo} alt="OER Bookr"/>*/} Create a new account
      </Header>
        <Form className="ui form" size="large">
		<Segment stacked>
          <SemanticForm.Field>
            <label>
              Email
              <Field type="email" name="useremail" />
            </label>
          </SemanticForm.Field>
          <SemanticForm.Field>
            <label>
              Username
              <Field type="text" name="username" />
            </label>
          </SemanticForm.Field>
          <SemanticForm.Field>
            <label>
              Password
              <Field type="password" name="password" />
            </label>
          </SemanticForm.Field>
          <SemanticForm.Field>
            <label>
              Confirm Password
              <Field type="password" name="password2" />
            </label>
          </SemanticForm.Field>
		  
          <Button primary type="submit" fluid size='large'> 
            Register
          </Button>
		  </Segment>
        </Form>
		<Message>
       Already a Member? <Link to="/login">Sign in here</Link>
      </Message>
      </Grid.Column>
    </Grid>
  );
};

const FormikRegistration = withFormik({
  mapPropsToValues: ({
    useremail,
    username,
    password,
    password2
  }) => {
    return {
      useremail: useremail || "",
      username: username || "",
      password: password || "",
      password2: password2 || ""
    };
  },

  validationSchema: yup.object().shape({
    useremail: yup
      .string()
      .required("You must provide an email.")
      .email("The email provided is not valid."),
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