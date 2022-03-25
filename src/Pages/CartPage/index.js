import React from "react";

function Cart(props) {
  console.log(props.cart);
  const cart = props.cart;
  return (
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      {!cart
        ? "Your cart is empty"
        : cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
            );
          })}
    </table>
  );
}

export { Cart };
