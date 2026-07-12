import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
    // State variables - super powerful react variables
    const [listOfRestaurants, setListOfRestaurants] = useState([{
    type: "restaurant",
    data: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/6f892224-627c-4702-89e5-430fb3637e58_10575.JPG",
      cuisines: ["Pizzas"],
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 37,
      avgRating: "4.3",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      id: "1344137",
      name: "Homely",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/10/4edad1e9-5485-4cf5-9af0-fc38c2e55071_1344137.jpg",
      cuisines: [
        "South Indian",
        "Home Food",
        "North Indian",
        "Desserts",
      ],
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 38,
      avgRating: "3.9",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      id: "1110698",
      name: "Seoul Burgers & Shakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/cb9cb0e5-a834-497b-913e-09fcbba3a094_1110698.jpg",
      cuisines: ["Burger", "Bubble Tea", "Fast Food", "Beverages"],
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 34,
      avgRating: "4.5",
    },
    subtype: "basic",
  }])

    return(
        <div className="body">
            <div className="filter">
                <button  className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(res=> res.data.avgRating > 4)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    // Not using keys (not acceptable) < using indexes as keys (okay, but not recommended) > using unique ids as keys (best practice)
                    listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.data.id} resData = { restaurant }/>)
                } 
            </div>
        </div>
    )
}

export default Body