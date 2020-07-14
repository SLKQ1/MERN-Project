import React, { Component } from "react";
import "./HomePage.styles.css";
import WristShotGrid from "../../components/WristShotGrid/WristShotGrid.component";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/post/post.action";

class HomePage extends Component {
  componentDidMount() {
    // calling async call to get wrist shots
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { isFetching, wrist_shots, errorMessage } = this.props;
    let homePageContent;
    // content to be displayed if there is an error
    if (errorMessage) {
      homePageContent = (
        <div className="wrist-shot-grid-container">
          <h1>Ops Something when wrong.. </h1>
          <h3>{errorMessage}</h3>
        </div>
      );
    }
    // content to be displayed if fetching
    else if (isFetching) {
      homePageContent = (
        <div className="wrist-shot-grid-container">
          <h1>Loading...</h1>
        </div>
      );
    }
    // normal content displayed
    else {
      homePageContent = (
        <div className="wrist-shot-grid-container">
          <WristShotGrid wrist_shots={wrist_shots} />
        </div>
      );
    }
    return (
      <div className="homepage">
        <div className="homepage-title-content">
          <h1>Welcome to Wrist Shot</h1>
          <p>Post and explore amazing wrist shots.</p>
        </div>
        {homePageContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.post.isFetching,
  wrist_shots: state.post.wrist_shots,
  errorMessage: state.post.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
