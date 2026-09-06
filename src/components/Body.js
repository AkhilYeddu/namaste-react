import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import {SWIGGY_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import restaurantData from "../utils/restaurants.json"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    
    // Local State variables - super powerful react variables
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("");

    
    
    // whenever state variable changes, react triggers a reconciliation cycle(re-renders the compoenent)
    console.log("body component rendered")

    
    useEffect(()=>{
        fetchData()
    },[] ) // this callback function will be called after the body component is rendered.


    const fetchData = async()=>{
        const data = await fetch("https://corsproxy.io/?url=" + SWIGGY_URL);
        const json =  await data.json();
        // console.log(json);
        const realData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; //finding the restaurants inside the big messy json data
        setListOfRestaurants(realData)
        setFilteredRestaurants(realData)

       const fakeData = restaurantData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
       setListOfRestaurants(fakeData)
       setFilteredRestaurants(fakeData)
    }

    console.log(listOfRestaurants)
    
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return(
            <h1>Looks like you are offline, please check your connection and try again</h1>
        )
    }

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="m-4 px-4 py-2 bg-green-100 rounded-lg" onClick={ () =>{
                        // filter the restaurants and update the UI
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)

                    }   
                    } >Search</button>
                </div>
                
                <div>
                    <button  className="bg-orange-200 px-4 py-2 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(res=> res.info.avgRating > 4)
                    setListOfRestaurants(filteredList)
                    }}>Top Rated Restaurants</button>
                </div>
                


            </div>

            <div className="flex flex-wrap">
                {
                    // Not using keys (not acceptable) < using indexes as keys (okay, but not recommended) > using unique ids as keys (best practice)
                    // listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.data.id} resData = { restaurant }/>)
                    filteredRestaurants.map(restaurant =>
                        <Link className="m-4 w-[250px]" key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {/* if the restaurant is promoted, use RestaurantCardPromoted, or else use normal RestaurantCard */
                                restaurant.info?.promoted ? (

                                    <RestaurantCardPromoted resData = {restaurant}/>
                                ) : (
                                    <RestaurantCard resData = {restaurant}/>
                                )
                            
                            }
                            
                        </Link>
                         
                        )
                } 
            </div>
        </div>
    )
}
export default Body
