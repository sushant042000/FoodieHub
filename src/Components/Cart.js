import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartActive, setCartActive] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  // const [totalAmount, setTotalAmount] = useState(0);
  const cartItemsCount = cartItems.length;
  const totalAmount = cartItems.reduce((acc, cItem) => {
    return (acc += cItem.price * cItem.qty);
  }, 0);

  return (
    <>
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

        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <h2 className="text-center text-gray-500 mt-5">Your cart is empty</h2>
        )}

        <div className=" absolute  bottom-12   lg:bottom-0   ">
          <h3 className="text-gray-800  font-semibold">
            Items : {cartItemsCount}
          </h3>
          <h3 className="text-gray-800 font-semibold">
            Total Amount :{totalAmount}
          </h3>
          <hr className="w-[90vw] lg:[18vw] py-2" />
          <button
            className="bg-green-500   mb-2 lg:mb-5 w-[90vw] p-2 rounded-lg hover:bg-green-600  lg:w-[18vw]"
            onClick={() => navigate("/success")}
          >
            Chekout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className="text-5xl fixed  right-10 bottom-10 cursor-pointer hover:scale-110 cursor-grab transition-all duration-500 "
        onClick={() => setCartActive(true)}
      />
      {cartItems.length ? (
        <div className="fixed bg-red-600 h-5 w-5 right-6 bottom-20 rounded-lg justify-center items-center">
          <p className="flex justify-center items-center">{cartItemsCount}</p>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
