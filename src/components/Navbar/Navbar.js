import React from "react";
import "./styles.css";

export default function Navbar(props) {
  return (
    <nav className="nav">
      <ul className="navUL">
        <li className="navLi logo">
          <a href="/">
            The<span className="shop">Shop</span>
          </a>
        </li>
        <li className="navLi">
          <a href="/">Home</a>
        </li>
        <li className="navLi">
          <a href="/">Products</a>
        </li>
        {/* <li className="navLi">
          <a href="/">Blog</a>
        </li> */}
        <li className="navLi">
          <a href="/shop">Shop</a>
        </li>
        {/* <li className="navLi">
          <a href="/">Contacts</a>
        </li> */}
      </ul>
    </nav>
  );
}
