import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {SWIGGY_URL} from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = ()=>{
    // Local State variables - super powerful react variables
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("");
    console.log(listOfRestaurants)
    // whenever state variable changes, react triggers a reconciliation cycle(re-renders the compoenent)
    console.log("body component rendered")

    useEffect(()=>{
        fetchData()
    }, []) // this callback function will be called after the body component is rendered.


    const fetchData = async()=>{
        const data = await fetch(SWIGGY_URL);
        const json =  await data.json();
        // console.log(json);
        const realData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; //finding the restaurants inside the big messy json data
        setListOfRestaurants(realData)
        setFilteredRestaurants(realData)
    }
    



    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={ () =>{
                        // filter the restaurants and update the UI
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)

                    }   
                    } >Search</button>
                </div>
                <button  className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(res=> res.info.avgRating > 4)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    // Not using keys (not acceptable) < using indexes as keys (okay, but not recommended) > using unique ids as keys (best practice)
                    // listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.data.id} resData = { restaurant }/>)
                    filteredRestaurants.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = { restaurant }/>)
                } 
            </div>
        </div>
    )
}
export default Body
