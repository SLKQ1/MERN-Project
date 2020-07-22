import React from "react";
import "./SignIn.styles.css";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { signInStartAsync } from "../../redux/auth/auth.actions";
import { useState } from "react";

function SignIn({ signInStartAsync }) {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatching action to fetch user
    signInStartAsync(userCredentials);
    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2>Have an account?</h2>
      <h4>Sign in with your email and password:</h4>

      <form className="sign-in-form" onSubmit={handleSubmit}>
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
          label="Password"
          type="password"
          name="password"
          value={userCredentials.password}
          required
        />

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInStartAsync: (credentials) => dispatch(signInStartAsync(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
