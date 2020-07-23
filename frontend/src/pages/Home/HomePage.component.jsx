import React from "react";
import "./HomePage.styles.css";
import WristShotGrid from "../../components/WristShotGrid/WristShotGrid.component";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/wristShots/wristShots.action";
import { useEffect } from "react";

/* TODO can potentially split this component up, 
 making the api call in wrist shot grid this will avoid prop drilling 
 which is currently happening
*/

function HomePage({
  fetchCollectionStartAsync,
  isFetching,
  wrist_shots,
  errorMessage,
}) {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);

  // const { isFetching, wrist_shots, errorMessage } = props;
  let homePageContent;
  // content to be displayed if there is an error
  if (errorMessage) {
    homePageContent = (
      <div className="wrist-shot-grid-container">
        <h1>Ops something went wrong.. </h1>
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
  // if no posts yet
  else if (wrist_shots.length === 0) {
    homePageContent = (
      <div className="wrist-shot-grid-container">
        <h1>Be the first to post!</h1>
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

const mapStateToProps = (state) => ({
  isFetching: state.wristShot.isFetching,
  wrist_shots: state.wristShot.wrist_shots,
  errorMessage: state.wristShot.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
