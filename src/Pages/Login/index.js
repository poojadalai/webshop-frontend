import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const URL = "http://localhost:4000/auth/login";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(URL, {
        password,
        email,
      });
      console.log(newUser.data);
      setMessage("Login Successful!!!");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        setMessage(error.response.data);
      }
    }
  };

  return (
    <div className="reg-container">
      <form className="signup-form" onSubmit={submit}>
        <h1 className="header">Login</h1>
        <p className="text-align color f20">
          Please login using account detail below!
        </p>
        <p>{message}</p>
        <div className="fields">
          <div className="form-group">
            <p>Email Address</p>
            <input
              className="edit"
              type="text"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              type="password"
              placeholder=""
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <p>Forgot your password?</p>
          </div>
          <div className="form-group">
            <button className="btn-rg" type="submit">
              Sign In
            </button>
            <NavLink className="navlink-pro " to="/signup">
              <p className="color text-align f20">
                Don’t have an Account? Create account
              </p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Login };
