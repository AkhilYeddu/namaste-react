import { useEffect, useState } from "react"
import resMenu from "../utils/all_menus.json"
const useRestaurantMenu = (resId)=>{
    console.log("custom hook called")
    const json = resMenu.menus
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{
        setResInfo(json[resId].data)
        console.log(resInfo)
    }
    return resInfo
}

export default useRestaurantMenu