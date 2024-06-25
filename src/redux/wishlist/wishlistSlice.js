import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{wish:[]},
    reducers:{
        wishProduct:(state,action)=> {
            
           const isWish = state.wish.find(x=>x.id==action.payload.id)
            
            if(!isWish){
                state.wish.push(action.payload)
            }
            else{
                alert("ok")
            }
            
        },
        removeWish :(state,action) =>{
                state.wish= state.wish.filter(x=>x.id!==action.payload)         
         
        }

    }
})

export const {wishProduct}=wishlistSlice.actions
export const {removeWish}=wishlistSlice.actions
export default wishlistSlice.reducer
