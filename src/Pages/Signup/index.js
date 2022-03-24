import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Signup() {
  return (
    <div className="reg-container">
      <form className="signup-form">
        <h1 className="header">Registration</h1>
        <p className="text-align color f20">Welcome! Create an Account</p>
        <div className="fields">
          <div class="form-group">
            <p>Email Address</p>
            <input
              class="edit"
              type="text"
              placeholder=""
              name="email"
              id="email"
              required
            />
          </div>
          <div class="form-group">
            <p>Password</p>
            <input
              type="password"
              placeholder=""
              name="psw"
              id="psw"
              required
            />
          </div>
          <div class="form-group">
            <p>Repeat Password</p>
            <input
              type="password"
              placeholder=""
              name="psw-repeat"
              id="psw-repeat"
              required
            ></input>
          </div>
          <div class="form-group">
            <button className="btn-rg">Register</button>
            <NavLink className="navlink-pro " to="/login">
              <p className="text-align color f20">Already have an account? Login</p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Signup };
