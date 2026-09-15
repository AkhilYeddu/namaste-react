import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state, action)=>{
            // earlier in vanilla (older) redux - MUTATING THE STATE IS PROHIBITED

            // mutating the store
            // Redux ToolKit - we have to mutate the state
            state.items.push(action.payload)
        },
        removeItems : (state, action)=>{
            state.items.pop()
        },
        clearCart : (state, action)=>{
            state.items.length = 0; // []
        }
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
