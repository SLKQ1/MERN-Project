import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "./FullSizeImage.styles.css";

function FullSizeImage(props) {
  let { wrist_shots } = props;
  let { id } = useParams();

  // filtering needed wrist shot from required
  let filtered_wrist_shot = null;
  wrist_shots.forEach(function (wrist_shot) {
    id = parseInt(id, 10);
    if (wrist_shot.id === id) {
      // console.log(wrist_shot);
      filtered_wrist_shot = wrist_shot;
    }
  });

  const { imgURL } = filtered_wrist_shot;

  return <img src={imgURL} alt="watch" className="full-size-img" />;
}

const mapStateToProps = (state) => ({
  wrist_shots: state.post.wrist_shots,
});

export default connect(mapStateToProps)(FullSizeImage);
