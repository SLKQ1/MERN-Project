import React from "react";
import { connect } from "react-redux";
import "./FullSizeImage.styles.css";

function FullSizeImage(props) {
  let { wrist_shot } = props;
  const { imgURL } = wrist_shot.data;

  return <img src={imgURL} alt="watch" className="full-size-img" />;
}

const mapStateToProps = (state) => ({
  wrist_shot: state.wristShot.wrist_shot,
});

export default connect(mapStateToProps)(FullSizeImage);
