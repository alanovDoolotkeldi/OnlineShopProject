import { createSlice } from "@reduxjs/toolkit";

const cartProduct = createSlice({
    name:"cartProduct",
    initialState:{carts:[]},
    reducers:{
        setCart:(state,action) =>{
            state.carts.push(action.payload)
        }
    }
})

export const {setCart}=cartProduct.actions
export default cartProduct.reducer