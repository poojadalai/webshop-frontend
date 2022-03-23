import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { id, image, name, price, description } = props;

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="single-card-container">
          <div>
            <img className="product-image" src={image} alt="Product" />
          </div>
          <div>
            <p className="product-name">{name}</p>
            <div>
              <p>
                ${price} <span>Rating stars</span>
              </p>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { ProductCard };
