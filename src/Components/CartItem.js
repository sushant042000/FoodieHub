import React, { useState } from "react";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  let [itemCount, setItemCount] = useState(1);

  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="flex gap-6 shadow-md mt-3 h-20">
      <img src={item.img} alt="" className="w-[50px] h-[50px]" />
      <div className="gap-6 leading-4">
        <div className="flex justify-between items-center gap-10 ">
          <h2>{item.name}</h2>
          <AiFillDelete
            className="hover:text-red-600 cursor-pointer font-medium"
            onClick={removeItemFromCart}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="text-green-500">₹ {item.price}</span>
          <div className="flex justify-between gap-2">
            <AiOutlinePlusCircle
              className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer transition-all ease-linear"
              onClick={() => {
                setItemCount((itemCount += 1));
              }}
            />
            <span>{itemCount}</span>
            <AiOutlineMinusCircle
              className="  text-xl hover:bg-gray-600 overflow-hidden rounded-lg hover:text-white cursor-pointer"
              onClick={() => {
                if (itemCount > 1) setItemCount((itemCount -= 1));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
