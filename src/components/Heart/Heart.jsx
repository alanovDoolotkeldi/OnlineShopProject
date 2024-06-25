import React from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import Image05 from "../../assets/svg/image05.svg"
import Image06 from "../../assets/svg/image06.svg"
import Image07 from "../../assets/svg/image07.svg"
import "./Heart.scss"

import { removeWish } from '../../redux/wishlist/wishlistSlice'

function Heart() {
    const dispatch = useDispatch()
    const {wish} = useSelector((state)=>state.wishlist)


 
    console.log(wish)
  return (
    <div className=''>
  <div className="best-container container">

<div className="best-blocks">
{
wish.map((item)=>(
    <div key={item.id} className="product-block">
        {/* {(((item.oldPrice-item.newPrice)/item.newPrice)*100).toFixed(0)} */}
    <button>20%</button>
    <div onClick={()=>dispatch(wishProduct(item))} className="product-block-position">
        <img src={Image05} alt="" />
    </div>
    <div className="product-block-position-2">
        <div className="fixed-image">
           
            <img src="" alt="" />
        </div>
        <img onClick={()=>dispatch(removeWish(item.id))} src={Image06} alt="" />
    </div>
    <div className="product-block-image">
        <img src={item.images[1]} alt="" />
        <button >Add To Cart</button>
    </div>
    <div className="product-block-text">
        <h1>{item.title.slice(1,20)}</h1>
        <div className="product-block-text-flex">
            {/* <p>${item.newPrice}</p>
            <p style={{
                color:"#000000",
                opacity:"0.5"
            
            }}>${item.oldPrice}</p> */}
            <p>$900</p>
            <p style={{
                color:"#000000",
                opacity:"0.5"
            
            }}>$800</p>
          
        </div>
        <div style={{
            display:"flex",
            gap:"8px",
        }} className="product-block-text-flex">
            <img src={Image07} alt="" />
            
            <p style={{
                color:"#000000",
                opacity:"0.5"
            
            }}>($90)</p>
        </div>

    </div>
  </div>
))
}
</div>
</div>
      
    </div>
  )
}

export default Heart
