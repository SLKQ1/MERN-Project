import React from "react";
import "./WristShotDetails.styles.css";
import WristShot from "../../components/WristShot/WristShot.component";

function WristShotDetails() {
  return (
    <div className="wrist-shot-details">
      <img
        className="wrist-shot-details-img"
        id="myImg"
        src="https://images.squarespace-cdn.com/content/v1/5a6a048bf43b553453f5f73f/1533181741050-RRPIKY2A1IIN9L7U04U0/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/1+iwc+pilot+chrono+wrist+shot+small.jpg"
        alt="Watch model"
      />
      <div className="wrist-shot-details-img-footer">
        <h3>User name</h3>
        <h3> &#9733; </h3>
      </div>
      <div className="wrist-shot-details-comment-section">
        <h1>Comment Section coming soon.</h1>
      </div>
    </div>
  );
}

export default WristShotDetails;
