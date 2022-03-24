import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Login() {
  return (
    <div className="reg-container">
      <form className="signup-form">
        <h1 className="header">Login</h1>
        <p className="text-align color f20">
          Please login using account detail below!</p>
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
            <p>Forgot your password?</p>
          </div>
          <div class="form-group">
            <button className="btn-rg">Sign In</button>
            <NavLink className="navlink-pro " to="/signup">
              <p className="color text-align f20">Don’t have an Account? Create account</p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Login };
