import { useEffect, useState } from "react"
import resMenu from "../utils/all_menus.json"
import { SWIGGY_URL } from "./constants"
const useRestaurantMenu = (resId)=>{
    // custom hook
    const json = resMenu.menus
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{


        const data = await fetch("https://corsproxy.io/?url=" + SWIGGY_URL);
        const json = await data.json()
        const realData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResInfo(realData)

        // setResInfo(json[resId].data)
        setResInfo(resMenu.menus[resId]?.data)
    }
    return resInfo
}

export default useRestaurantMenu