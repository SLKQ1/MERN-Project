import React from "react";
import "./WristShotDetails.styles.css";
import WristShot from "../../components/WristShot/WristShot.component";

function WristShotDetails() {
  return (
    <div className="wristshot-details-grid">
      <div className=" wristshot-details-grid-item wristshot-image-container">
        <WristShot />
      </div>
      <div className=" wristshot-details-grid-item wristshot-user-details-container">
        User details
      </div>
      <div className=" wristshot-details-grid-item wrist-shot-comments-container">
        Comments
      </div>
    </div>
  );
}

export default WristShotDetails;
