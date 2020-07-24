import React, { Component } from "react";
import "./CommentSection.styles.css";
import CommentList from "../CommentList/CommentList.component";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { connect } from "react-redux";

class CommentSection extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="comment-section-container">
        <h2>Comments:</h2>
        <div className="comments-list-container">
          <CommentList />
        </div>
        {/* only allowing comments when user is signed in  */}
        {currentUser ? (
          <div className="comments-input">
            <FormInput placeholder="Enter your comment" />
            <Button>Post</Button>
          </div>
        ) : (
          <div className="comments-input">
            <h3>Sign in to leave a comment</h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, null)(CommentSection);
