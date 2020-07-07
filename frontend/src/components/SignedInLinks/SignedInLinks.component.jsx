import React from "react";
import "./SignedInLinks.styles.css";

import { Link } from "react-router-dom";

function SignedInLinks() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/sign-out">Sign out</Link>
      </li>
    </ul>
  );
}

export default SignedInLinks;
