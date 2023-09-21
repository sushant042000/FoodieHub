import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Success = () => {
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
          <p>Your order has been successfully placed</p>
        </>
      )}
    </div>
  );
};

export default Success;
