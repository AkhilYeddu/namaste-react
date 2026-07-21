import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = ()=>{
    const [btnName, setBtnName] = useState("login"); //everytime this state variable changes, the header component is rendered again
    console.log("Header compoenent rendered")

    // case-1 : if there is no dependancy array, useEffect will be called for every component render.
    // case-2 : if there is a empty dependancy array, useEffect will be called for only initial render( just once )
    // case-3 : if dependancy array is [btnName], then it will be called everytime the btnName updates/ changes.
    

    useEffect(()=>{
        console.log("useEffect called")
    },[])
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
            
    )
}

export default Header