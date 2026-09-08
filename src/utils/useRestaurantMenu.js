import { useEffect, useState } from "react"
import resMenu from "../utils/all_menus.json"
const useRestaurantMenu = (resId)=>{
    // custom hook
    const json = resMenu.menus
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{
        setResInfo(json[resId].data)
    }
    return resInfo
}

export default useRestaurantMenu