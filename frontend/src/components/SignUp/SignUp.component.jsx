import React, { Component } from "react";
import "./SignUp.styles.css";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
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
    this.setState({ email: "", username: "", password: "" });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>Don't have an account?</h2>
        <h4>Sign up with your email:</h4>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
            label="Username"
            type="username"
            name="username"
            value={this.state.username}
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

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}
export default SignUp;
