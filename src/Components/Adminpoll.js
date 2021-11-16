import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./adminpoll.css";

const Adminpoll = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-section">
      <Container>
        <Row>
          <div className="login-form">
            <form className="login_form">
              <h1 className="text-center">Add a New User</h1>

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
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit_btn1">
                Add
              </button>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Adminpoll;
