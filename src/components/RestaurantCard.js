const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = (props)=>{
   
    const{ resData } = props; // resData is inside props.
    const { key } = props;
    const {name, cuisines, avgRating, costForTwo,costForTwoString, deliveryTime, cloudinaryImageId} = resData?.data; //optional chaining
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + 
                cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoString}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard