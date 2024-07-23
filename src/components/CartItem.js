import React from "react";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const IncrementCartItems = () => {
    dispatch(cartActions.addTocart({ id, price, name }));
  };
  const DecrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={DecrementCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={IncrementCartItems}>
        +
      </button>
    </div>
  );
};

export default CartItem;
