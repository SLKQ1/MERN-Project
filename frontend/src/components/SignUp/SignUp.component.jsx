import React, { Component } from "react";
import "./SignUp.styles.css";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { Redirect } from "react-router-dom";
import { signUpStartAsync } from "../../redux/user/user.actions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    // making sure password and confirm password match
    if (this.state.password === this.state.confirmPassword) {
      // dispatching async sign up action
      this.props.signUpStartAsync(this.state);
      // resetting state
      this.setState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("passwords don't match");
    }
  };

  render() {
    if (this.props.currentUser) {
      return <Redirect to="/"></Redirect>;
    }
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
          <FormInput
            onChange={this.handleChange}
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStartAsync: (credentials) => dispatch(signUpStartAsync(credentials)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
