import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Success = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <PulseLoader color="#36d7b7" />
      ) : (
        <>
        
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Order Successful!
          </h1>
          <p className="mb-6">Your order has been successfully placed</p>
         
        <div className="flex justify-center items-center flex-col bg-slate-400 p-2 rounded">
        {cartItems.map((itm,idx)=><Card item={itm} key={idx}/>)}
        </div>
        
          <button
            className="bg-green-500 w-[90vw] lg:w-[12vw] rounded p-2 mt-6 hover:bg-green-700 hover:scale-110 transition-all duration-500"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default Success;

const Card = ({item}) => {
  return (
    <div className="flex w-[60vw] justify-end mt-4  items-center">
      <h1 className="font-semibold text-gray-800 w-[60%]">{item.name} :</h1>
      <p className="w-[25%] ">{item.qty}</p>
    </div>
  );
};
