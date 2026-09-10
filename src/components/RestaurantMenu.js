import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // own custom hook
    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.title)
    const [showIndex, setShowIndex] = useState(null)
 
    if(!resInfo) return <Shimmer/>
    const{name, costForTwoMessage, cuisines} = resInfo?.cards[2].card?.card?.info
    const{itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card

    return  (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordions */}
            {
                
                categories.map((category, index)=>{
                    return <RestaurantCategory data = {category?.card?.card} key = {category?.card?.card?.title} showItems = {index === showIndex && true} setShowIndex = {()=> setShowIndex(index)}/>
                    
                })
            }
        </div>
        

    )
}

export default RestaurantMenu