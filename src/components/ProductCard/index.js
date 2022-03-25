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

function ProductCard({ product, setCart, cart }) {
  // const { id, mainImage, name, rating, price, description ,cart,setCart} = props;

  const { id, mainImage, title, rating, price, description } = product;

  const addToCart = (e) => {
    // e.preventDefault()
    console.log(`adding to cart`);
    setCart([...cart, product]);
  };

  return (
    <div className="single-card-container">
      <NavLink className="navlink-pro" to={`/products/${id}`}>
        <div className="single-image">
          <img src={mainImage} alt="Product" />
        </div>
      </NavLink>
      <div className="single-content">
        <h3 className="product-name f28">{title}</h3>
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
          <FontAwesomeIcon
            onClick={addToCart}
            className="fa-s"
            icon={faCartShopping}
          ></FontAwesomeIcon>

          <NavLink to="/share">
            <FontAwesomeIcon className="fa-s" icon={faHeart}></FontAwesomeIcon>
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
  );
}

export { ProductCard };
