import React, { Component } from "react";
import "./Modal.styles.css";
import { withRouter } from "react-router-dom";
import Image from "../Image/Image.component";
import { connect } from "react-redux";
import Button from "../Button/Button.component";
import { fetchPostStartAsync } from "../../redux/wristShots/wristShots.action";
import { Link } from "react-router-dom";
import VoteStar from "../VoteStar/VoteStar.component";
import CommentSection from "../CommentSection/CommentSection.component";

class Modal extends Component {
  componentDidMount() {
    // calling async request to get wrist shot
    const { fetchPostStartAsync } = this.props;
    fetchPostStartAsync(this.props.match.params.id);
  }
  back = (e) => {
    const { history } = this.props;
    e.stopPropagation();
    history.goBack();
  };
  render() {
    return (
      <div className="modal-container">
        <Button type="button" onClick={this.back}>
          Close
        </Button>
        <div className="modal">
          {this.props.wrist_shot ? (
            <div className="modal-content-container">
              <div className="modal-title-container">
                <span>By {this.props.wrist_shot.data.postedBy}</span>
                <Link
                  id="full-size-link"
                  to={`full-size/${this.props.wrist_shot.data._id}`}
                >
                  View Full Image
                </Link>
                <VoteStar
                  id={this.props.wrist_shot.data._id}
                  votes={this.props.wrist_shot.data.votes}
                  clickable={true}
                />
              </div>

              <div className="modal-img-container">
                <Image wrist_shot={this.props.wrist_shot.data} />
              </div>

              <div className="modal-description-container">
                <h2>Description: </h2>
                <p>{this.props.wrist_shot.data.description}</p>
              </div>
              <div className="modal-comments-container">
                <CommentSection wrist_shot={this.props.wrist_shot.data} />
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    wrist_shot: state.wristShot.wrist_shot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostStartAsync: (post_id) => dispatch(fetchPostStartAsync(post_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Modal));
