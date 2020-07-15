import React from "react";
import "./ProfilePage.styles.css";
import WristShot from "../../components/WristShot/WristShot.component";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-title-container">
        <h1>Welcome User</h1>
      </div>
      <div className="profile-content-container">
        <div className="profile-user-posts-container">
          <h2 className="profile-page-content-title">Posts: </h2>
          <WristShot></WristShot>
          <WristShot></WristShot>
          <WristShot></WristShot>
          <WristShot></WristShot>
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
export default ProfilePage;
