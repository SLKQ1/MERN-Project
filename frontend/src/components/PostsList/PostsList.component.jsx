import React, { Component } from "react";
import "./PostsList.styles.css";
import { Link } from "react-router-dom";
import WristShot from "../../components/WristShot/WristShot.component";
import { connect } from "react-redux";
import { fetchUserPostsStartAsync } from "../../redux/user/user.actions";

class PostsList extends Component {
  componentDidMount() {
    const { username } = this.props.currentUser;
    const { fetchUserPostsStartAsync } = this.props;
    fetchUserPostsStartAsync(username);
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
            <Link key={_id} id={_id} to={`/wrist-shot-page/${_id}`}>
              <WristShot
                key={_id}
                postedBy={postedBy}
                votes={votes}
                imgURL={imgURL}
                title={title}
              ></WristShot>
            </Link>
          );
        }
      );
    }
    return (
      <div className="profile-user-posts-container">
        <h2 className="profile-page-content-title">Your posts: </h2>
        {UserPostContent}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
