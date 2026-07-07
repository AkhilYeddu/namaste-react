import React from "react";
import ReactDOM from "react-dom/client";

/*

- Header
    -> Logo
    -> Nav Items
- Body
    -> Search
    -> Restaurant container
        => Restaurant Card
- Footer
    -> Copyright
    -> Links
    -> Address
    -> Contact

*/

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = "https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/eatzilla--online-food-delivery-app-logo-by-lokesh-murali-dribbble.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
            
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"></img>
            <h3>Meghana Foods</h3>
            <h4>Biryani, South Indian, Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>30 mins</h4>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                <input></input>
                <button>Search</button>

            </div>

            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)



