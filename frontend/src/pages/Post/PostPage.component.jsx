import React, { Component } from "react";
import "./PostPage.styles.css";
import FormInput from "../../components/FormInput/FormInput.component";
import Button from "../../components/Button/Button.component";
import { connect } from "react-redux";
import { createNewPostStartAsync } from "../../redux/post/post.action";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imgURL: "",
      postedBy: "Faiz",
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
      this.props.createNewPostStartAsync(this.state);
      // resetting state
      this.setState({
        title: "",
        description: "",
        imgURL: "",
        postedBy: "Faiz",
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
  createNewPostStartAsync: (post) => dispatch(createNewPostStartAsync(post)),
});

export default connect(null, mapDispatchToProps)(PostPage);