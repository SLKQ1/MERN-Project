import React from "react";
import "./SignedInLinks.styles.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { signOutStartAsync } from "../../redux/auth/auth.actions";

function SignedInLinks(props) {
  console.log(props);
  const { currentUser } = props;
  const profilePath = `/profile/${currentUser._id}`;
  const handleClick = () => {
    // dispatching sign out action
    props.signOutStartAsync();
  };
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to={profilePath}>Profile</Link>
      </li>
      <li>
        <Link to="/" onClick={handleClick}>
          Sign out
        </Link>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOutStartAsync: () => dispatch(signOutStartAsync()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
