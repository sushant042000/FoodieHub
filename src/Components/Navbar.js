import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3">
      <div >
        <h2 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h2>
        <h2 className=" text-2xl font-bold text-gray-800" >FoodieHub</h2>
      </div>

      <div>
        <input
          type=" text"
          name="search"
          id=""
          placeholder="search here"
          className="text-sm font-normal lg:rounded text-gray-800 p-3 border-gray-800  w-full lg:w-[25vw]"
        ></input>
      </div>
    </nav>
  );
};

export default Navbar;
