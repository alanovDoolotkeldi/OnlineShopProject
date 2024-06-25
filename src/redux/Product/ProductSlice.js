import { createSlice } from "@reduxjs/toolkit";
const produtSlice = createSlice({
    name:"product",
    initialState:{items:[]},
    reducers:{
        setProduct:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
        }
    }
})
export const {setProduct} = produtSlice.actions
export default produtSlice.reducer
