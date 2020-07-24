import React from "react";
import "./CommentList.styles.css";
import moment from "moment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <div className="comment" key={comment._id}>
              <div className="comment-header">
                <span className="comment-poster">By {comment.postedBy}</span>
                <span className="comment-time">
                  {moment(comment.createdAt).calendar()}
                </span>
              </div>
              <p className="comment-content">{comment.content}</p>
            </div>
          );
        })
      ) : (
        <p className="comment-content">No comments yet, be the first!</p>
      )}
    </div>
  );
}
export default CommentList;
