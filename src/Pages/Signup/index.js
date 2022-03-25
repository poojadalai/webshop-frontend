import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Signup() {
  const URL = "http://localhost:4000/users/signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name);
  // console.log(email);
  // console.log(password);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(URL, {
        name,
        email,
        password,
      });
      console.log(newUser.data);      
      setMessage(`Registered Successfully!!`);

      setTimeout(function () {        
        window.location.href= "/login"
      }, 500);

      setName("");
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
        <h1 className="header">Registration</h1>
        <p className="text-align color f20">Welcome! Create an Account</p>
        <p>{message}</p>
        <div className="fields">
          <div className="form-group">
            <p>Name</p>
            <input
              type="text"
              placeholder=""
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="form-group">
            <p>Email Address</p>
            <input
              className="edit"
              type="text"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn-rg" type="submit">
              Register
            </button>
            <NavLink className="navlink-pro " to="/login">
              <p className="text-align color f20">
                Already have an account? Login
              </p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Signup };
