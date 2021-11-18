import React, { useState } from "react";
import "./login.css";
import { BrowserRouter as Router, useNavigate, Routes } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form className="login_form">
        <h1>Login </h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />

        <div className="d-flex justify-content-between w-100">
          <button
            type="submit"
            className="login_btn1"
            onClick={(async) => navigate("/Admin")}
          >
            Login
          </button>
          <button type="submit" className="login_btn2">
            Login as a guest
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
