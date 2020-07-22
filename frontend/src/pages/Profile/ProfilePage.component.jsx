import React, { Component } from "react";
import "./ProfilePage.styles.css";
import ProfileContent from "../../components/ProfileContent/ProfileContent.component";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-title-container">
        <h1>Welcome User</h1>
      </div>
      <ProfileContent />
    </div>
  );
}

export default ProfilePage;
