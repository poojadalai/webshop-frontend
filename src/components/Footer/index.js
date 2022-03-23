import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="nav-li logo p-2">
          <NavLink to="/shop" className="nav-li">
            The<span className="shop">Shop</span>
          </NavLink>
        </div>
        <div>
          <p className="footer-head">Categories</p>
          <ul className="items">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        <div>
          <p className="footer-head">My Account</p>
          <ul className="items">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div>
          <p className="footer-head">Follow Us</p>
          <div className="link">
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa1"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </NavLink>
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa1"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </NavLink>
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa1"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
