import React, { useState } from "react";
import "./styles.css";

function Cart(props) {
  const { cart, setCart } = props;

  // const [quantity, setQuantity] = useState(0);

  // const [quantites, setQuantities] = useState({});

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // console.log(props.cart);4

  const increaseQuantity = (id) => {
    // map over cart
    // if id match
    // {
    //   ...item,
    //   quantity: item.quantity + 1
    // }
    // set new array in cart

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return{ ...item, quantity: item.quantity + 1 };
      }
      return item
    });
    console.log(newCart);
     setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    // extra feature - if quamtoty is 1 - remove from array
  };

  return (
    <div className="cart">
      <div className="shop-page-container ">
        <table className="table">
          <tr className="24">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {/* <tr>
            <td>GermanyGermanyGermanyGermanyGermanyGermany</td>
            <td>GermanyGermanyGermany</td>
            <td>
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="cart-btn"
              >
                -
              </button>
              <span className="val">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="cart-btn"
              >
                +
              </button>
            </td>
            <td>250</td>
          </tr> */}
          {!cart
            ? "Your cart is empty"
            : cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="cart-btn"
                      >
                        -
                      </button>
                      <span className="val">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="cart-btn"
                      >
                        +
                      </button>
                    </td>
                    <td>€204.58</td>
                  </tr>
                );
              })}
        </table>
      </div>
    </div>
  );
}

export { Cart };
