import React from "react";
import "./WristShot.styles.css";

import { withRouter } from "react-router-dom";

function WristShot({ user, votes, imgURL, match, id, history, homepage }) {
  const changeRoute = () => {
    history.push(`${match.url}wrist-shot/${id}`);
  };

  let user_span;
  let votes_span;
  if (homepage) {
    user_span = <span className="wristshot-user">by {user} </span>;
    votes_span = <span className="wristshot-votes"> &#9733; {votes} </span>;
  } else {
    user_span = null;
    votes_span = null;
  }
  return (
    <div>
      <div
        onClick={changeRoute}
        className="wristshot-grid-item"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      ></div>
      {user_span}
      {votes_span}
    </div>
  );
}

export default withRouter(WristShot);
