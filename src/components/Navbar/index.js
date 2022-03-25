import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <div className="menu">
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li logo">
            <NavLink to="/shop" className="nav-li">
              The<span className="shop">Shop</span>
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/shop"
              className="nav-li"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/details"
              className="nav-li"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/shop"
              className="nav-li"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
      <form className="search">
        <input
          className="add"
          type="search"
          placeholder="search here..."
        ></input>
      </form>
      <div className="shop-links">
        <NavLink to="/signup" className="icons">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </NavLink>
        <NavLink to="/" className="icons">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </NavLink>
        <NavLink to="/" className="icons">
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </NavLink>
      </div>
    </div>
  );
}

export { Navbar };
