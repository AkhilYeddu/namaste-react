import { useEffect, useState } from "react"
import resMenu from "../utils/resMenu.json"
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_URL } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{  
       const data = await fetch(SWIGGY_MENU_URL);
       const json = await data.json()
        console.log(json.data)
       setResInfo(json.data)
    
    }

    
    console.log(resInfo.length)
    if(resInfo.length === 0) return <Shimmer/>

    console.log(resInfo)
    const{name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card.info

    const{itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
    console.log(itemCards)


    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

            <ul>
                {
                    itemCards.map(item => <li key = {item.card.info.id}>{item.card.info.name}</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu