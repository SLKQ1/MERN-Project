import React from "react";
import "./Modal.styles.css";
import { useHistory, useParams, Link } from "react-router-dom";
import Image from "../Image/Image.component";
import { connect } from "react-redux";
import Button from "../Button/Button.component";

function Modal(props) {
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

  // console.log(filtered_wrist_shot);

  let history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal-container">
      <Button type="button" onClick={back}>
        Close
      </Button>
      <div className="modal">
        <div className="modal-content-container">
          <div className="modal-title-container">
            <span>By {filtered_wrist_shot.postedBy}</span>
            <Link id="full-size-link" to={`full-size/${id}`}>
              View Full Image
            </Link>
            <span> &#9733; {filtered_wrist_shot.votes} </span>
          </div>

          <div className="modal-img-container">
            <Image filtered_wrist_shot={filtered_wrist_shot} />
          </div>

          <div className="modal-comments-container">
            <h1>Comments Section Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wrist_shots: state.post.wrist_shots,
});

export default connect(mapStateToProps)(Modal);
