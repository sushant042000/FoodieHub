import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const Protected = ({ component }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return cartItems.length ? component : <Navigate to="/" />;
};

export default Protected;
