import React from "react";
import "./Button.styles.css";

function Button({ children, ...otherProps }) {
  return (
    <button className="custom-btn" {...otherProps}>
      {children}
    </button>
  );
}
export default Button;
