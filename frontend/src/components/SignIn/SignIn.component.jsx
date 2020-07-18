import React, { Component } from "react";
import "./SignIn.styles.css";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { signInStartAsync } from "../../redux/user/user.actions";

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
    // dispatching action to fetch user
    this.props.signInStartAsync(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    signInStartAsync: (credentials) => dispatch(signInStartAsync(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
