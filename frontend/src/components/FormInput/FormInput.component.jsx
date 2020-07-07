import React from "react";
import "./FormInput.styles.css";

function FormInput({ handleChange, label, textarea, ...otherProps }) {
  if (textarea) {
    return (
      <div className="group">
        {label ? <label> {label} </label> : null}
        <textarea
          onChange={handleChange}
          {...otherProps}
          className="text-area"
        ></textarea>
      </div>
    );
  }
  return (
    <div className="group">
      {label ? <label> {label} </label> : null}
      <input onChange={handleChange} {...otherProps} className="form-input" />
    </div>
  );
}

export default FormInput;
