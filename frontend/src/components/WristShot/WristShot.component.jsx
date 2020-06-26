import React from "react";
import "./WristShot.styles.css";

import { withRouter } from "react-router-dom";

function WristShot({ user, votes, imgURL, match, id, history, homepage }) {
  const changeRoute = () => {
    history.push(`${match.url}wrist-shot/${id}`);
  };

  console.log(imgURL);

  let user_span;
  let votes_span;
  let class_name;
  if (homepage) {
    user_span = <span className="wrist-shot-user">by {user} </span>;
    votes_span = <span className="wrist-shot-votes"> &#9733; {votes} </span>;
    class_name = "wrist-shot-grid-item";
  } else {
    user_span = null;
    votes_span = null;
    class_name = "wrist-shot-grid-item-inactive";
  }
  return (
    <div className="wrist-shot-grid-item">
      <div
        onClick={changeRoute}
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
        className="wrist-shot-grid-image"
      />
      <div className="wrist-shot-grid-item-footer">
        {user_span}
        {votes_span}
      </div>
    </div>
  );
}

export default withRouter(WristShot);
