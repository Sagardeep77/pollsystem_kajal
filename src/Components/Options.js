import React from "react";
import "./options.css";

const Options = () => {
  return (
    <div className="options">
      <div className="option-container">
        <input type="text" placeholder="option 1" className="option-input" />
        <input type="text" placeholder="option 2" className="option-input" />
      </div>
    </div>
  );
};
export default Options;
