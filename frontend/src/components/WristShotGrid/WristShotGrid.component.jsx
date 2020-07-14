import React from "react";
import "./WristShotGrid.styles.css";

import WristShot from "../WristShot/WristShot.component";

import { Link, useLocation } from "react-router-dom";

function WristShotGrid({ wrist_shots }) {
  let location = useLocation();

  return (
    <div className="wrist-shot-grid">
      {wrist_shots.map(({ _id, ...otherProps }) => {
        return (
          <Link
            key={_id}
            to={{
              pathname: `/wrist-shot/${_id}`,
              state: { background: location },
            }}
            id={_id}
          >
            {" "}
            <WristShot id={_id} {...otherProps} />
          </Link>
        );
      })}
    </div>
  );
}

export default WristShotGrid;
