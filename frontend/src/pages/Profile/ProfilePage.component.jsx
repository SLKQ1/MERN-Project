import React, { Component } from "react";
import "./ProfilePage.styles.css";
import WristShot from "../../components/WristShot/WristShot.component";
import { connect } from "react-redux";
import { fetchUserPostsStartAsync } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";

class ProfilePage extends Component {
  componentDidMount() {
    const { username } = this.props.currentUser;
    this.props.fetchUserPostsStartAsync(username);
  }
  render() {
    const { isFetching, userPosts, errorMessage } = this.props;
    let UserPostContent;
    if (errorMessage) {
      UserPostContent = <h1>Opps something went wrong...</h1>;
    }
    // content to be displayed if fetching
    else if (isFetching) {
      UserPostContent = <h1>Loading...</h1>;
    }
    // normal content being displayed
    else if (userPosts != null) {
      UserPostContent = userPosts.data.map(
        ({ postedBy, votes, imgURL, title, _id }) => {
          return (
            <WristShot
              key={_id}
              postedBy={postedBy}
              votes={votes}
              imgURL={imgURL}
              title={title}
            ></WristShot>
          );
        }
      );
    }

    return (
      <div className="profile-page">
        <div className="profile-title-container">
          <h1>Welcome User</h1>
        </div>
        <div className="profile-content-container">
          <div className="profile-user-posts-container">
            <h2 className="profile-page-content-title">Your posts: </h2>
            {UserPostContent}
          </div>
          <div className="profile-user-notifications-container">
            <h2 className="profile-page-content-title">Notifications: </h2>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
            <h3>notification</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state.user.userPosts,
    isFetching: state.user.isFetching,
    errorMessage: state.user.errorMessage,
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPostsStartAsync: (username) =>
      dispatch(fetchUserPostsStartAsync(username)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
