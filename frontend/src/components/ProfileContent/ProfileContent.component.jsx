import React from "react";
import "./ProfileContent.styles.css";
import PostsList from "../PostsList/PostsList.component";

function ProfileContent() {
  return (
    <div className="profile-content-container">
      <PostsList />
      <div className="profile-user-notifications-container">
        <h2 className="profile-page-content-title">Notifications: </h2>
        <h3>notification</h3>
      </div>
    </div>
  );
}

export default ProfileContent;
