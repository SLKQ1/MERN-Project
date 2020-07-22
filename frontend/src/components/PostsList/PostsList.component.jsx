import React from "react";
import "./PostsList.styles.css";
import { Link, useLocation } from "react-router-dom";
import WristShot from "../../components/WristShot/WristShot.component";
import { connect } from "react-redux";
import { fetchUserPostsStartAsync } from "../../redux/user/user.actions";
import { useEffect } from "react";

function PostsList({
  fetchUserPostsStartAsync,
  isFetching,
  userPosts,
  errorMessage,
  currentUser,
}) {
  // react hook to make api call to get all user posts
  useEffect(() => {
    fetchUserPostsStartAsync(currentUser.username);
  }, [fetchUserPostsStartAsync, currentUser]);

  // using location to set the background of the modal when user clicks one of their posts
  let location = useLocation();

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
    UserPostContent = userPosts.data.map(({ _id, ...otherProps }) => {
      return (
        <Link
          key={_id}
          id={_id}
          to={{
            pathname: `/wrist-shot/${_id}`,
            state: { background: location },
          }}
        >
          <WristShot key={_id} {...otherProps}></WristShot>
        </Link>
      );
    });
  }
  return (
    <div className="profile-user-posts-container">
      <h2 className="profile-page-content-title">Your posts: </h2>
      {UserPostContent}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
