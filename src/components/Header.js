import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [btnName, setBtnName] = useState("login"); //everytime this state variable changes, the header component is rendered again
    // console.log("Header compoenent rendered")

    // case-1 : if there is no dependancy array, useEffect will be called for every component render.
    // case-2 : if there is a empty dependancy array, useEffect will be called for only initial render( just once )
    // case-3 : if dependancy array is [btnName], then it will be called everytime the btnName updates/ changes.
    

    useEffect(()=>{
        console.log("useEffect called for header component")
    },[])

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex bg-pink-100 justify-between p-2 shadow-xl sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-30" src = {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex m-6 p-6">
                    <li className="px-4">
                        Online status : 
                        {
                            onlineStatus ? "🟢" : "🔴"
                        }
                    </li>
                    <li className="px-4">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <button className="login" onClick={()=>{
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
            
    )
}

export default Header