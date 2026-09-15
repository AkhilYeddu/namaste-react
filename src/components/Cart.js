import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=> store.cart.items);
    const handleClearCart = ()=>{
        console.log("clear cart clicked")
        dispatch(clearCart())
    }
    
    return cartItems.length == 0 ? <div className="font-bold text-center text-xl m-4 p-4">Your cart is empty!</div> : (
        
       
        <div>
            <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto p-4  shadow-xl bg-gray-50">
                <ItemList data = {cartItems}/>
            </div>
            <button className="text-white bg-black rounded-lg font-bold m-2 p-2 right-0 hover:cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            </div>
            
        
        </div>  
        
    )
}

export default Cart