import React from "react";
import "./WristShot.styles.css";

import { withRouter } from "react-router-dom";
import VoteStar from "../VoteStar/VoteStar.component";

function WristShot({ postedBy, votes, imgURL, title }) {
  return (
    <div className="wrist-shot-grid-item">
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
        className="wrist-shot-grid-image"
      />
      <div className="wrist-shot-grid-item-footer">
        <span className="wrist-shot-user">
          {title} by {postedBy}{" "}
        </span>
        <VoteStar votes={votes} clickable={false} />
      </div>
    </div>
  );
}

export default withRouter(WristShot);
