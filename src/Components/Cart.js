import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="fixed right-0 top-0    bg-white h-[100vh]  w-full lg:w-[25vw] p-10 justify-center items-center  ">
      <div className="flex justify-between  items-center">
        <span className="text-xl font-bold  text-gray-600">My Orders</span>
        <AiOutlineClose className="cursor-pointer hover:text-red-600  text-xl" />
      </div>

      
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
     
      
     
     

      <div className=" absolute  bottom-12   lg:bottom-0   ">
        <h3 className="text-gray-800  font-semibold">Items : 1</h3>
        <h3 className="text-gray-800 font-semibold">Total Amount :500</h3>
        <hr className="w-[90vw] lg:[18vw] py-2" />
        <button className="bg-green-500  w-[90vw] p-2 rounded-lg hover:bg-green-600  lg:w-[18vw] mb-2">
          Chekout
        </button>
      </div>
    </div>
  );
};

export default Cart;
