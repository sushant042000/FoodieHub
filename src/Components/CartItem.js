import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  increamentQty,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(item));
    toast.success(`${item.name} removed`,{icon:"✔"});
  };

  return (
    <div className="flex gap-6 shadow-md mt-3 h-18">
      <img src={item.img} alt="" className="w-[50px] h-[50px]" />
      <div className="gap-6 leading-4">
        <div className="flex justify-between items-center gap-6  ">
          <h2 className="flex w-[80%]">{item.name}</h2>
          <AiFillDelete
            className="hover:text-red-600 cursor-pointer text-[15px] w[20%]"
            onClick={removeItemFromCart}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="text-green-500">₹ {item.price}</span>
          <div className="flex justify-between gap-2">
            <AiOutlinePlusCircle
              className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer transition-all ease-linear"
              onClick={() => {
                dispatch(increamentQty(item));
              }}
            />
            <span>{item.qty}</span>
            <AiOutlineMinusCircle
              className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer"
              onClick={() => {
                dispatch(decrementQty(item));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
