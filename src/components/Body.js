import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = ()=>{
    // Local State variables - super powerful react variables
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    useEffect(()=>{
        fetchData()
    }, []) // this callback function will be called after the body component is rendered.

    console.log("body component rendered");

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
