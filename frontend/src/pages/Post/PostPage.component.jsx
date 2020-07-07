import React, { Component } from "react";
import "./PostPage.styles.css";
import FormInput from "../../components/FormInput/FormInput.component";
import Button from "../../components/Button/Button.component";
import { connect } from "react-redux";
import { createNewPost } from "../../redux/post/post.action";
import { useHistory, Redirect } from "react-router-dom";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 6,
      title: "",
      description: "",
      imgURL: "",
      postedBy: "Faiz",
      votes: 0,
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // posting if fields are not empty
    if (
      this.state.title !== "" &&
      this.state.description !== "" &&
      this.state.imgURL !== ""
    ) {
      // dispatching action to redux to make new post
      this.props.createNewPost(this.state);
      const id = this.state.id;
      // resetting state
      this.setState({
        id: 6,
        title: "",
        description: "",
        imgURL: "",
        postedBy: "Faiz",
        votes: 0,
      });

      // redirecting user
      this.props.history.push(`/`);
    }
  };

  render() {
    return (
      <div className="create-post-container">
        <h1>Post your amazing wrist shot!</h1>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Title"
            type="text"
            name="title"
            value={this.state.title}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label="Image URL"
            type="text"
            name="imgURL"
            value={this.state.imgURL}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label="Description"
            type="text"
            name="description"
            value={this.state.description}
            textarea="true"
            required
          />
          <Button onClick={this.handleSubmit}>Post</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNewPost: (post) => dispatch(createNewPost(post)),
});

export default connect(null, mapDispatchToProps)(PostPage);
