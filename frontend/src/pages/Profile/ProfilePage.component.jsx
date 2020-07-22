import React, { Component } from "react";
import "./ProfilePage.styles.css";
import WristShot from "../../components/WristShot/WristShot.component";
import { connect } from "react-redux";

class ProfilePage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="profile-page">
        <div className="profile-title-container">
          <h1>Welcome User</h1>
        </div>
        <div className="profile-content-container">
          <div className="profile-user-posts-container">
            <h2 className="profile-page-content-title">Your posts: </h2>
            {this.props.usersPosts ? (
              this.props.usersPosts.map((post) => {
                return <WristShot></WristShot>;
              })
            ) : (
              <h2>You have no posts yet</h2>
            )}
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
    usersPosts: state.user.usersPosts,
  };
};

export default connect(mapStateToProps)(ProfilePage);
