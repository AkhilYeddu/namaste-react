const ItemList = (props)=>{
    const {data} = props
    console.log(data)
    return(
        <div>
            {
                data.map((item)=> {
                    return (

                    <div key = {item.card.info.id} className="text-left flex justify-between  border-gray-300 my-4 py-4 border-b-2">
                        <div className="w-9/12">
                        {
                            console.log("isVeg:", item.card.info.isVeg)
                        }
                        {
                            
                            item.card.info.isVeg === 1 ?  (
                                <div className="flex items-center justify-center w-4 h-4 border-2 border-emerald-600 p-0.5 box-border rounded-sm">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                </div>

                            ) : (
                               <div className="flex items-center justify-center w-4 h-4 border-2 border-amber-900 p-0.5 box-border rounded-sm">
                                    <div className="w-0 h-0 border-x-[5px] border-x-transparent border-b-[9px] border-b-amber-900"></div>
                                </div>

                            )
                        }
                        

                            <div className="font-bold"> {item.card.info.name}</div>
                            <div className="text-md"> ₹{item.card.info.price/100}</div>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        
                        <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="cursor-pointer p-2 font-medium mx-15 my-36 text-white bg-green-700 shadow-lg rounded-lg hover:bg-white hover:text-green-700">Add</button>        
                        </div>
                        <img className="w-full" src = {item.card.info.imageId}></img>
                        </div>
                    </div>

                    )
                })
            }
        </div>
    )
}
export default ItemList