import React from "react";
import "./WristShotGrid.styles.css";

import WristShot from "../WristShot/WristShot.component";

import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function WristShotGrid({ wrist_shots }) {
  let location = useLocation();

  return (
    <div className="wrist-shot-grid">
      {wrist_shots.map(({ id, ...otherProps }) => {
        return (
          <Link
            key={id}
            to={{
              pathname: `/wrist-shot/${id}`,
              state: { background: location },
            }}
            id={id}
          >
            {" "}
            <WristShot id={id} {...otherProps} />
          </Link>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  wrist_shots: state.post.wrist_shots,
});

export default connect(mapStateToProps)(WristShotGrid);
