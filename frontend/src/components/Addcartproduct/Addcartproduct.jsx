import React, { useState } from "react";
import "./addcartproduct.css";
function Addcartproduct({ image, productDetail }) {
  console.log("this is faizan pasha");
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(users);
  console.log(image);

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  let decrementCounter = () => {
    if (counter <= 1) {
      setCounter(1);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="product_cart">
        {users.map((e) => {
          return (
            <>
              <div className="cart_list">
                <img src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${e.image}`} />
                <div className="main_cart">
                  <div className="product_name">{e.name}</div>
                  <div className="product-price">
                    <strong>Rs. </strong> <span>{e.price}</span>
                  </div>
                  <div className="cart_btn">
                    <button onClick={decrementCounter}>-</button>
                    <div>{counter}</div>
                    <button onClick={incrementCounter}>+</button>
                  </div>
                  <div className="amount">Amount {e.price * counter}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Addcartproduct;
