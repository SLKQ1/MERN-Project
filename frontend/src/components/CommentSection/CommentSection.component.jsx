import React from "react";
import "./CommentSection.styles.css";
import CommentList from "../CommentList/CommentList.component";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { connect } from "react-redux";
import { commentOnPostStartAsync } from "../../redux/user/user.actions";
import { useState } from "react";

function CommentSection(props) {
  const [userComment, setComment] = useState({
    postedBy: props.currentUser.username,
    content: "",
  });

  const { currentUser } = props;
  const { comments } = props.wrist_shot;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setComment({ ...userComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userComment.content !== "") {
      // pushing a temp comment onto the comments list to make the user think the comment was instantly posted.
      comments.push({ ...userComment, createdAt: Date(), _id: Math.random() });
      const { commentOnPostStartAsync, wrist_shot } = props;

      // dispatching async action to add comment
      commentOnPostStartAsync(userComment, wrist_shot._id);
      // resetting state
      setComment({
        postedBy: props.currentUser.username,
        content: "",
      });
    }
  };
  return (
    <div className="comment-section-container">
      <h2>Comments:</h2>
      <div className="comments-list-container">
        <CommentList comments={comments} />
      </div>
      {/* only allowing comments when user is signed in  */}
      {currentUser ? (
        <form className="comments-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="content"
            value={userComment.content}
            label="Comment"
            required
            onChange={handleChange}
          />
          <Button type="submit">Post</Button>
        </form>
      ) : (
        <div className="comments-input">
          <h3>Sign in to leave a comment</h3>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    comment: state.user.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentOnPostStartAsync: (comment, postID) =>
      dispatch(commentOnPostStartAsync(comment, postID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
