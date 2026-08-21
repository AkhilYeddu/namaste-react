import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const[onlineStatus, setOnlineStatus] = useState(true); //bool, true is online false is offline

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
    }, []) // get the status once

    return onlineStatus
}

export default useOnlineStatus