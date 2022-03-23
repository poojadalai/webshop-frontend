import React, { useEffect } from "react";
import { Banner } from "../../components";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

const API_URL = "http://localhost:4000/products";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({
    Electronics: false,
    "Women's Clothing": false,
    Jewelery: false,
    "Men's Clothing": false,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isFilterEmpty = () => {
    // map over each property
    // if prop === true => false
    // return true
    if (Object.values(categories).every((element) => element === false)) {
      return true;
    } else {
      return false;
    }
  };

  const filteredOnCategory = isFilterEmpty()
    ? [...products]
    : [...products].filter((product) => {
        // return product.category.title === category;
        return categories[product.category.title];
      });

  console.log(filteredOnCategory);

  const handleCheck = (e) => {
    const { value } = e.target;
    console.log(value);
    if (e.target.checked) {
      const newCaterogries = {
        ...categories,
        [value]: true,
      };
      setCategories(newCaterogries);
    } else {
      const newCaterogries = {
        ...categories,
        [value]: false,
      };
      setCategories(newCaterogries);
    }
  };

  useEffect(() => {
    console.log("cat", categories);
  }, [categories]);
  return (
    <div>
      <Banner />
      <div className="shop-page-container">
        <div className="category-bar">
          <h3>Categories</h3>
          <div>
            <div>
              <input
                type="checkbox"
                value="Electronics"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label>Electronics</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Jewelery"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label>Jewelery</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Men's Clothing"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label>Men's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Women's Clothing"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label>Women's Clothing</label>
            </div>
          </div>
        </div>
        <div>
          {!filteredOnCategory
            ? "Products not found"
            : filteredOnCategory.map((product, index) => {
                const { id, mainImage, title, price, description } = product;
                return (
                  <div key={index}>
                    <ProductCard
                      id={id}
                      image={mainImage}
                      name={title}
                      price={price}
                      description={description}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="pagination-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export { Shop };
