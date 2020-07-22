import React from "react";
import "./SignUp.styles.css";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { signUpStartAsync } from "../../redux/auth/auth.actions";
import { useState } from "react";

function SignUp({ signUpStartAsync }) {
  const [userCredentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // making sure password and confirm password match
    if (userCredentials.password === userCredentials.confirmPassword) {
      // dispatching async sign up action
      signUpStartAsync(userCredentials);
      // resetting state
      setCredentials({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("passwords don't match");
    }
  };

  return (
    <div className="sign-up">
      <h2>Don't have an account?</h2>
      <h4>Sign up with your email:</h4>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={userCredentials.email}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Username"
          type="username"
          name="username"
          value={userCredentials.username}
          required
        />

        <FormInput
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={userCredentials.password}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStartAsync: (credentials) => dispatch(signUpStartAsync(credentials)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
