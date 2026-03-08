import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCateogory from "./RestaurantCategory";
import { useState } from "react";
import React from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId); 
  const [ShowIndex, setShowIndex] = useState(null);
  const dummy = "dummy data from RestaurantMenu.js";


  if (loading) return <Shimmer />;

 
  if (error) return <div className="text-center my-6 text-red-600">
    Failed to load menu. Please try again.
  </div>;

 
  if (!resInfo) return <div className="text-center my-6">No menu available.</div>;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCateogory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === ShowIndex}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;