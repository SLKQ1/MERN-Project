import React, { useState } from "react";
import "./VoteStar.styles.css";
import { connect } from "react-redux";
import { voteOnPostStartAsync } from "../../redux/user/user.actions";

function VoteStar({ votes, clickable, id, voteOnPostStartAsync, currentUser }) {
  const [buttonStatus, setStatus] = useState({ color: "black" });
  const incrementVotes = () => {
    setStatus({ color: "#3fa9cf" });
    voteOnPostStartAsync(id, { userID: currentUser._id });
    // incrementing the vote count so the user knows that they have voted on click
    votes.length += 1;
  };

  if (clickable) {
    return (
      <span style={{ color: buttonStatus.color }} onClick={incrementVotes}>
        {" "}
        &#9733; {votes.length}{" "}
      </span>
    );
  }
  return <span>&#9733; {votes.length} </span>;
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    wrist_shot: state.wristShot.wrist_shot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    voteOnPostStartAsync: (postID, userID) =>
      dispatch(voteOnPostStartAsync(postID, userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteStar);
