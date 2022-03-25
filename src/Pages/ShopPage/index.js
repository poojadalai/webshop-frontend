import React, { useEffect } from "react";
import { Banner } from "../../components";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components";
import ReactStars from "react-rating-stars-component";

const API_URL = "http://localhost:4000/products";

function Shop({ setCart,cart }) {
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
    // setCart({ name: "Some object" });
  }, []);

  const isFilterEmpty = () => {
    if (Object.values(categories).every((element) => element === false)) {
      return true;
    } else {
      return false;
    }
  };

  const filteredOnCategory = isFilterEmpty()
    ? [...products]
    : [...products].filter((product) => {
        return categories[product.category.title];
      });

  // console.log(filteredOnCategory);

  //handling checkbox
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

  

  return (
    <div>
      <Banner />
      <div className="shop-page-container">
        <div className="category-bar">
          <h3 className="f20">Categories</h3>
          <div className="cat-input f18">
            <div>
              <input
                type="checkbox"
                value="Electronics"
                checked={categories["Electronics"]}
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
          <div className="rating-container">
            <h3 className="f20">Ratings</h3>
            <div className="d-flex center">
              <input
                type="checkbox"
                value="3.2"
                onChange={(e) => {
                  console.log(e);
                }}
              ></input>
              <ReactStars
                count={5}
                size={20}
                value={4}
                half
                activeColor="#ffd700"
              />
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <ReactStars
                count={5}
                size={20}
                value={3}
                half
                activeColor="#ffd700"
              />
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <ReactStars
                count={5}
                size={20}
                value={2}
                half
                activeColor="#ffd700"
              />
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <ReactStars
                count={5}
                size={20}
                value={1}
                half
                activeColor="#ffd700"
              />
            </div>
          </div>
          <div className="price-container">
            <h3 className="f20">Price filter</h3>

            <div className="d-flex center">
              <input type="checkbox"></input>
              <span>€0.00 - €150.00</span>
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <span>€150.00 - €350.00</span>
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <span>€150.00 - €504.00</span>
            </div>
            <div className="d-flex center">
              <input type="checkbox"></input>
              <span>€450+</span>
            </div>
          </div>
        </div>
        <div>
          <div className="products-container">
            {!filteredOnCategory
              ? "Products not found"
              : filteredOnCategory.map((product, index) => {
                  // const { id, mainImage, rating, title, price, description } 
                    // product;
                  return (
                    <div key={index}>
                      <ProductCard
                        // 
                        product={product}
                        setCart={setCart}
                        cart={cart}
                      />
                    </div>
                  );
                })}
          </div>
          <div className="pagination-container">
            <button className="btn">Previous</button>
            <button className="btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Shop };
