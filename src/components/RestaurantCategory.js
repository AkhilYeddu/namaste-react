import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{
    const {data} = props;
    return(
        <div>
            <div className="w-6/12 shadow-lg mx-auto  p-4 my-4 bg-gray-50">{/* header */}
            <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
                <ItemList data = {data.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory