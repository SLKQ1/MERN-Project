import React from "react";
import "./HamburgerMenu.styles.css";

import { Link } from "react-router-dom";

function HamburgerMenu() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default HamburgerMenu;
