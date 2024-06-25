import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { setProduct } from '../../redux/Product/ProductSlice';
import { wishProduct } from '../../redux/wishlist/wishlistSlice';


import Image04 from "../../assets/svg/image04.svg"
import Image05 from "../../assets/svg/image05.svg"
import Image06 from "../../assets/svg/image06.svg"
import Image07 from "../../assets/svg/image07.svg"
import { data } from '../../Data';

import "./BesProducts.scss"


const API_PRODUCT = "https://api.escuelajs.co/api/v1/products"
console.log(API_PRODUCT)
function BestProducts() {
    const dispatch = useDispatch()
    const [category,setCategory] = useState([])
    const [isId ,setIsid] = useState(false)
    const [isImage , setIsImage] = useState("")
    console.log(wishProduct)
    let a = [1,2,4,5,7,8,9]

    const isA = a.reduce((item,sub)=>(
      item+sub
    ))
    console.log(isA)


    async function getProduct () {
        try {
            const res = await axios.get(API_PRODUCT)
            console.log(res.data)
            setCategory(res.data)
            
        } catch (error) {
            console.log(error,"is best Product")
            
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    function pushHandler (id,item) {
       setIsid(!isId)
       setIsImage(item.images[1])
    }
 
    function isImageHandler () {
      setIsid(!isId)
    }

  return (
    <section>
        <div className="container product-date">
        <div className="date-top">
          <div className="date-block"></div>
          <h5
            style={{
              paddingTop: "8px",
            }}
          >
            Categories
          </h5>
        </div>
        <div className="date-container">
          <div className="date-container-left">
            <h1>Best Selling Products</h1>
          </div>
          <div className="date-container-right">
           <button>View All</button>
          </div>
        </div>
      </div>

      <div className="best-container container">

        <div className="best-blocks">
        {
        category.map((item)=>(
            <div key={item.id} className="product-block">
                {/* {(((item.oldPrice-item.newPrice)/item.newPrice)*100).toFixed(0)} */}
            <button>20%</button>
            <div onClick={()=>dispatch(wishProduct(item))} className="product-block-position">
                <img src={Image05} alt="" />
            </div>
            <div className="product-block-position-2">
                <div onClick={isImageHandler} style={{display:isId?"block":"none"}} className="fixed-image">
                   
                    <img src={isImage} alt="" />
                </div>
                {/* isId  */}
                <img onClick={()=>pushHandler(item.id,item)} src={Image06} alt="" />
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
      
    </section>
  )
}


export default BestProducts
