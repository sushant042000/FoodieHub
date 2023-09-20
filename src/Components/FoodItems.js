import React from "react";
import FoodData from "../Data/foodData";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

const FoodItems = () => {
  let filteredData = [];

  const { selectedCategory } = useSelector((state) => state.category);
  const { search } = useSelector((state) => state.search);
  if (selectedCategory === "All") {
    filteredData = FoodData.filter((itm) =>
      itm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  } else {
    filteredData = FoodData.filter(
      (itm) =>
        itm.category === selectedCategory &&
        itm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <div className="flex gap-10 flex-wrap justify-center w-full lg:justify-start mx-6">
      {filteredData.length ? filteredData.map((item, idx) => {
        return <FoodItem item={item} key={item.id} />;
      }): <h1 className="flex justify-center items-center text-center">Not availabele 😢</h1>}
    </div>
  );
};

export default FoodItems;
