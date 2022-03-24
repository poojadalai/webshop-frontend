import React from "react";
import "./styles.css";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faCartShopping,
  faHeart,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  const { id, image, name, rating, price, description } = props;

  return (
    <NavLink className="navlink-pro" to={`/products/${id}`}>
      <div className="single-card-container">
        <div className="single-image">
          <img src={image} alt="Product" />
        </div>
        <div className="single-content">
          <h3 className="product-name f28">{name}</h3>
          <div className="price-rate f24">
            <span className="span">€{price}</span>
            
              <ReactStars
                count={5}
                size={20}
                value={rating}
                half
                activeColor="#ffd700"
              />
            
          </div>
          <p>{description}</p>

          <div>
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa-s"
                icon={faCartShopping}
              ></FontAwesomeIcon>
            </NavLink>
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa-s"
                icon={faHeart}
              ></FontAwesomeIcon>
            </NavLink>
            <NavLink to="/share">
              <FontAwesomeIcon
                className="fa-s"
                icon={faSearchPlus}
              ></FontAwesomeIcon>
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export { ProductCard };
