import React from "react";
import {  AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";


const CartItem = () => {
  return (
    <div className="flex gap-6 shadow-md mt-3">
      <img
        src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="gap-4 leading-3" >
        <div className="flex justify-between items-center gap-10">
          <h3>Onion pizza</h3>
          <AiFillDelete className="hover:text-red-600 cursor-pointer" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="text-green-500">₹ 130</span>
         <div className="flex justify-between gap-2">
         <AiOutlinePlusCircle  className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer transition-all ease-linear" />
         <span>1</span>
         <AiOutlineMinusCircle className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer"/>
         
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartItem;
