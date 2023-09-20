import React, { useEffect, useState } from "react";
import FoodData from "../Data/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const {selectedCategory}=useSelector((state)=>state.category);
  const dispatch=useDispatch();

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((d) => d.category))];

    setCategories(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  return (
    <div className="mx-6 mt-6">
      <h2 className="text-xl font-semibold">Find the best food</h2>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className={`mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500 hover:text-white ${selectedCategory==='All' && "bg-green-500 text-white" }` }
        onClick={()=>dispatch(setCategory("All"))}>
        
        
          All
        </button>
        {categories.map((category, idx) => {
          return (
            <button
              key={idx}
              className={`mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white" }`}
            onClick={()=>dispatch(setCategory(category))}>
              {category} 
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
