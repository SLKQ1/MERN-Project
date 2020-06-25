import React from "react";
import "./HamburgerMenu.styles.css";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HamburgerMenu;
