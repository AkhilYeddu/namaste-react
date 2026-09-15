import { createSlice, current } from "@reduxjs/toolkit";

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
            // Redux ToolKit uses immer BTS
            state.items.push(action.payload)
        },
        removeItems : (state, action)=>{
            state.items.pop()
        }, //originalState = { items : ["pizza"] }
        clearCart : (state, action)=>{
            // RTK RULE : either mutate the current state, or return a new state
            // state.items.length = 0; // []
            return { items : [] }
            
        }
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
