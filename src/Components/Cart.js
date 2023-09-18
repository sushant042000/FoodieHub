import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartActive, setCartActive] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemsCount = cartItems.length;
  const totalAmount = cartItems.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  return (
    <div
      className={`fixed right-0 top-0    bg-white h-[100vh]  w-full lg:w-[25vw] p-10 justify-center items-center ${
        cartActive ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 z-50 `}
    >
      <div className="flex justify-between  items-center">
        <span className="text-xl font-bold  text-gray-600">My Orders</span>
        <AiOutlineClose
          className="cursor-pointer hover:text-red-600  text-xl"
          onClick={() => {
            setCartActive(!cartActive);
          }}
        />
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className=" absolute  bottom-12   lg:bottom-0   ">
        <h3 className="text-gray-800  font-semibold">
          Items : {cartItemsCount}
        </h3>
        <h3 className="text-gray-800 font-semibold">
          Total Amount :{totalAmount}
        </h3>
        <hr className="w-[90vw] lg:[18vw] py-2" />
        <button className="bg-green-500   mb-2 lg:mb-5 w-[90vw] p-2 rounded-lg hover:bg-green-600  lg:w-[18vw]">
          Chekout
        </button>
      </div>
    </div>
  );
};

export default Cart;
