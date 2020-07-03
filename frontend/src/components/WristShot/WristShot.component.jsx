import React from "react";
import "./WristShot.styles.css";

import { withRouter, Link } from "react-router-dom";

function WristShot({ user, votes, imgURL, match, id, history, homepage }) {
  return (
    <div className="wrist-shot-grid-item">
      <Link id="full-size-link" to={`full-size/${id}`}>
        View Full Image
      </Link>
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
        className="wrist-shot-grid-image"
      />
      <div className="wrist-shot-grid-item-footer">
        <span className="wrist-shot-user">by {user} </span>
        <span className="wrist-shot-votes"> &#9733; {votes} </span>
      </div>
    </div>
  );
}

export default withRouter(WristShot);
