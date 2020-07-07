import React, { Component } from "react";
import "./SignIn.styles.css";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Have an account?</h2>
        <h4>Sign in with your email and password:</h4>

        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />

          <FormInput
            onChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
