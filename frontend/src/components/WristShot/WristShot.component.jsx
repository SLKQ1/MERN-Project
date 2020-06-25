import React from "react";

import "./WristShot.styles.css";

function WristShot({ user, votes, imgURL }) {
  console.log(user);
  return (
    <div
      className="wristshot-grid-item"
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <div className="wristshot-grid-item-content">
        <p className="wristshot-user">by {user}</p>
        <span className="wristshot-votes">&#9733; {votes} </span>
      </div>
    </div>
  );
}

export default WristShot;
