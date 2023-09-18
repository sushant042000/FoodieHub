import React from "react";
import FoodData from "../Data/foodData";
import FoodItem from "./FoodItem";

const FoodItems = () => {
  return (
    <div className="flex gap-10 flex-wrap justify-center w-full lg:justify-start mx-6">
      {FoodData.map((item,idx)=>{
        return <FoodItem item={item} key={item.id}/>
      })}
    </div>
  );
};

export default FoodItems;
