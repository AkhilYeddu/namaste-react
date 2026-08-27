import { CDN_URL, FAKE_IMG_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
   
    const{ resData } = props; // resData is inside props.
    const {name, cuisines, avgRating, costForTwo,costForTwoString, sla, cloudinaryImageId} = resData?.info //optional chaining
    return(
        <div className="p-4 bg-gray-200 shadow-xl border border-gray-200 hover:bg-gray-400 rounded-lg">
            <img className="rounded-lg py-4" src={ cloudinaryImageId}>
            </img>
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard