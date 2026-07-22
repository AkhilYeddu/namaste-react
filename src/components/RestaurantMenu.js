import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_URL } from "../utils/constants";
import resMenu from "../utils/all_menus.json"
const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState([]);
    const { resId } = useParams();

    const json =  resMenu.menus
   

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{  
    //    const data = await fetch(SWIGGY_MENU_URL);
    //    const json = await data.json()
        setResInfo(json[resId].data)
       

    }

    
    if(resInfo.length === 0) return <Shimmer/>


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