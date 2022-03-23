import React from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { Description } from "../../components";

function Details(props) {
  const [product, setProduct] = useState({});

  //getting the id from the params
  const params = useParams();

  const fetchCharacter = async () => {
    const response = await axios.get(`http://localhost:4000/products/${params.productId}`);
    console.log("res", response.data);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div>
      <p className="navigation">
        Home. Shop.<span className="title"> {product.title}</span>
      </p>
      <div className="container">
        <div className="product-img">
          <img alt="product" src={product.mainImage} />
        </div>
        <div className="product-content">
          <h2>{product.title}</h2>{" "}
          <div className="col">
            <ReactStars
              count={5}
              size={20}
              value={product.rating}
              activeColor="#ffd700"
            />
            <span className="span">(22)</span>
            <button className="btn" onClick={() => console.log("Add reviews!")}>
              Add Review
            </button>
          </div>
          <span className="span">€{product.price}</span>
          <p>{product.description}</p>
          <div>
            <button className="btn" onClick={() => console.log("Add to cart!")}>
              <FontAwesomeIcon
                className="fa"
                icon={faCartShopping}
              ></FontAwesomeIcon>
              Add To Cart
            </button>
            <button
              className="btn"
              onClick={() => console.log("Add to favorite!")}
            >
              <FontAwesomeIcon className="fa" icon={faHeart}></FontAwesomeIcon>
              Favorite
            </button>
          </div>
          <h3>Categories: Furnitue, Wood</h3>
          <div className="col">
            <h3>Share</h3>
            <div className="link">
              <NavLink to="/share">
                <FontAwesomeIcon
                  className="fa"
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </NavLink>
              <NavLink to="/share">
                <FontAwesomeIcon
                  className="fa"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </NavLink>
              <NavLink to="/share">
                <FontAwesomeIcon
                  className="fa"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
}

export { Details };
