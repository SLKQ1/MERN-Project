import React from "react";
import "./SignedOutLinks.styles.css";

import { Link } from "react-router-dom";

function SignedOutLinks() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
