import React from "react";
import "./CommentList.styles.css";

function CommentList() {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-poster">By Faiz</span>
        <span className="comment-time">12:00pm</span>
      </div>
      <div className="comment-content">This is the first comment</div>
    </div>
  );
}

export default CommentList;
