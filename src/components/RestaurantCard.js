import { CDN_URL, FAKE_IMG_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
   
    const{ resData } = props; // resData is inside props.
    const {name, cuisines, avgRating, costForTwo,costForTwoString, sla, cloudinaryImageId} = resData?.info //optional chaining
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 shadow-xl border border-gray-200">
            <img className="res-logo" src={ cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard