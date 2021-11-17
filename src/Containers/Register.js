import React, { useState } from "react";
// import React,{usestate} from "react";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  return (
    <div className="register-wrapper">
      <h1>Register Now!</h1>
      <h6>Get started with your free account</h6>
      <div className="form-wrapper">
        <div className="input-container">
          <label className="user-label">User name:</label>
          <input
            type="text"
            placeholder="your unique nickname"
            className="input-box"
          />
        </div>
        <div className="input-container">
          <label className="user-label">Email:</label>
          <input
            type="text"
            placeholder="Enter your valid email"
            className="input-box"
          />
        </div>
        <div className="input-container">
          <label className="user-label">Password:</label>
          <input
            type="text"
            placeholder="Letters and numbers required"
            className="input-box"
          />
        </div>
        <div className="input-container">
          <label className="user-label">Confirmpassword:</label>
          <input
            type="text"
            placeholder="Letters and numbers required"
            className="input-box"
          />
        </div>
        <div>
            <button className="signup-button">Sign up</button>
        </div>
        <h6 className="heading">Already have an account? Login here</h6>
      </div>
    </div>
  );
};
export default Register;
