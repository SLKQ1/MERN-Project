import React from "react";
import "./Image.styles.css";

function Image({ wrist_shot }) {
  const { imgURL } = wrist_shot;
  return (
    <div
      className="modal-img"
      style={{ backgroundImage: `url(${imgURL})` }}
    ></div>
  );
}

export default Image;
