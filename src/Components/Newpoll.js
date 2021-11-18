import React from "react";
import "./newpoll.css";
import Options from "./Options";

const Newpoll = () => {
  return (
    <div className="new-poll-wrapper ">
      <div className="header">POLL-WORLD</div>
      <div className="form_container">
        <div className="poll-card-wrapper-container">
          <div className="poll-card-container">
            <label className="question_label"> Question no 1.</label>
            <input
              type="text"
              placeholder="Add a new question"
              className="inputbox"
            />
            <div className="option-container-wrapper">
              <Options />
            </div>
            <button className="add-button">Add</button>
          </div>

          <div className="poll-card-container">
            <label className="question_label"> Question no 2.</label>
            <input
              type="text"
              placeholder="Add a new question"
              className="inputbox"
            />
            <div className="option-container-wrapper">
              <Options />
            </div>
            <button className="add-button">Add</button>
          </div>

          <div className="poll-card-container">
            <label className="question_label"> Question no 3.</label>
            <input
              type="text"
              placeholder="Add a new question"
              className="inputbox"
            />
            <div className="option-container-wrapper">
              <Options />
            </div>
            <button className="add-button">Add</button>
          </div>

          <div className="poll-card-container">
            <label className="question_label"> Question no 4.</label>
            <input
              type="text"
              placeholder="Add a new question"
              className="inputbox"
            />
            <div className="option-container-wrapper">
              <Options />
            </div>
            <button className="add-button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newpoll;
