import React from "react";
import "./styles.css";

function ProductCard(props) {
  const { image, name, price, description } = props;

  return (
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
  );
}

export { ProductCard };
