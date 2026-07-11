import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                <input></input>
                <button>Search</button>
            </div>

            <div className="res-container">
                {
                    // Not using keys (not acceptable) < using indexes as keys (okay, but not recommended) > using unique ids as keys (best practice)
                    resList.map(restaurant => <RestaurantCard key = {restaurant.data.id} resData = { restaurant }/>)
                } 
            </div>
        </div>
    )
}

export default Body