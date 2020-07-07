import React from "react";
import "./WristShot.styles.css";

import { withRouter } from "react-router-dom";

function WristShot({ postedBy, votes, imgURL, match, id, history, homepage }) {
  return (
    <div className="wrist-shot-grid-item">
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
        className="wrist-shot-grid-image"
      />
      <div className="wrist-shot-grid-item-footer">
        <span className="wrist-shot-user">by {postedBy} </span>
        <span className="wrist-shot-votes"> &#9733; {votes} </span>
      </div>
    </div>
  );
}

export default withRouter(WristShot);
