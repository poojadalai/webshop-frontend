import React, { useEffect } from "react";
import { Banner } from "../../components";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components";

const API_URL = "http://localhost:4000/products";

function Shop() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

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

  const filteredOnCategory = !category
    ? [...products]
    : [...products].filter((product) => {
        return product.category.title === category;
      });

  console.log(filteredOnCategory);

  console.log(products);
  console.log(category);
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
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              />
              <label>Electronics</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Jewelery"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              />
              <label>Jewelery</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Men's Clothing"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              />
              <label>Men's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Women's Clothing"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
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
