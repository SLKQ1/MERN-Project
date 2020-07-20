import React from "react";
import "./HamburgerMenu.styles.css";

import SignedInLinks from "../SignedInLinks/SignedInLinks.component";
import SignedOutLinks from "../SignedOutLinks/SignedOutLinks.component";

function HamburgerMenu({ currentUser }) {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            {currentUser ? (
              <SignedInLinks currentUser={currentUser} />
            ) : (
              <SignedOutLinks />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HamburgerMenu;
