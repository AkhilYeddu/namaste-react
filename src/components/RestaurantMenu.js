import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // own custom hook
 
    if(!resInfo) return <Shimmer/>
    const{name, costForTwoMessage, cuisines} = resInfo?.cards[2].card?.card?.info
    const{itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card

    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

            <ul>
                {
                    itemCards.map(item => 
                    <li key = {item.card.info.id}>
                         {item.card.info.name} - Rs {item.card.info.price / 100}
                         <img src={item.card.info.imageId} className="menu-img"></img>
                    </li>)
                }
            </ul>
        </div>
        

    )
}

export default RestaurantMenu