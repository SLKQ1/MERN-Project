import React from "react";
import "./ProfilePage.styles.css";
import ProfileContent from "../../components/ProfileContent/ProfileContent.component";

function ProfilePage({ currentUser }) {
  const username = currentUser.username;
  return (
    <div className="profile-page">
      <div className="profile-title-container">
        <h1>Welcome {username} </h1>
      </div>
      <ProfileContent />
    </div>
  );
}

export default ProfilePage;
