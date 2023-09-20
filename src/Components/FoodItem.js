import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodItem = ({ item }) => {
 
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, qty: 1 }), toast(`${item.name} added to cart`));
  };
  return (
    <div className=" w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg">
      <img
        src={item.img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500"
      />
      <div className="flex justify-between text-sm">
        <h4>{item.name}</h4>
        <span className="text-green-500">₹{item.price}</span>
      </div>
      <div className="text-sm font-normal">
        <p>{item.desc.slice(0, 50)}... </p>
      </div>

      <div className="flex justify-between">
        <span className="flex align-middle justify-center items-center">
          <AiFillStar className=" mr-1 text-yellow-400" />
          {item.rating}
        </span>

        <button
          className="bg-green-500 p-2 rounded-lg hover:bg-green-600"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
