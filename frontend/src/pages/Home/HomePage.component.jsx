import React from "react";
import "./HomePage.styles.css";
import WristShotGrid from "../../components/WristShotGrid/WristShotGrid.component";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-title-content">
        <h1>Welcome to Wrist Shot</h1>
        <p>Post and explore amazing wrist shots.</p>
      </div>
      <WristShotGrid />
    </div>
  );
}

export default HomePage;
