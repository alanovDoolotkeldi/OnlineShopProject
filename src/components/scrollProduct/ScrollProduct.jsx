import React, { useEffect, useRef, useState } from "react";
import "./ScrollProduct.scss";
import Image02 from "../../assets/svg/image02.svg"
import Image03 from "../../assets/svg/image03.svg"
import Image04 from "../../assets/svg/image04.svg"
import Image05 from "../../assets/svg/image05.svg"
import Image06 from "../../assets/svg/image06.svg"
import Image07 from "../../assets/svg/image07.svg"
import { data } from "../../Data";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads/"

function ScrollProduct() {
    const productBlocksRef =useRef(null)
    const [scrollPosition,setScrolPosition] = useState(0)
    const [isScrollRight,setisScrollRight] = useState(0)
    console.log(productBlocksRef)
    const [category ,setData] = useState([])
    async function getService () {
        try {
            const res = await axios.get(API)
            
        } catch (error) {
            
        }

    }

function incrementScrollHandler () {
    
    if(productBlocksRef.current) {
        productBlocksRef.current.scrollBy({left:900,behavior:"smooth"})
        console.log(productBlocksRef.current.scrollBy.lenth)
    }
}
function decrementScrollHandler () {
    if(productBlocksRef.current) {
        productBlocksRef.current.scrollBy({left:-900,behavior:"smooth"})
        console.log(productBlocksRef.current.scrollX)
    }
}

function handleScroll() {
if(productBlocksRef.current) {
    const {scrollLeft,scrollWidth,clientWidth} = productBlocksRef.current
    setScrolPosition(scrollLeft)
    setisScrollRight(scrollLeft+clientWidth<scrollWidth)

}
}
    useEffect(()=>{
        getService()
        if(productBlocksRef.current) {
            productBlocksRef.current.addEventListener('scroll', handleScroll)
            handleScroll()
        }
        return ()=>{
            if(productBlocksRef.current) {
                productBlocksRef.current.removeEventListener('scroll', handleScroll)
            }
        }
    },[])

  return (
    <section
      style={{
        paddingTop: "140px",
      }}
    >
      <div className="container product-date">
        <div className="date-top">
          <div className="date-block"></div>
          <h5>Today’s</h5>
        </div>
        <div className="date-container">
          <div className="date-container-left">
            <h1>Flash Sales</h1>
            <div className="date-container-date">
              <div className="date-container-block">
                <small>Days</small>
                <h1>03</h1>
              </div>
              <h2>:</h2>
              <div className="date-container-block">
                <small>Hourse</small>
                <h1>23</h1>
              </div>
              <h2>:</h2>
              <div className="date-container-block">
                <small>Minutes</small>
                <h1>19</h1>
              </div>a
              <h2>:</h2>
              <div className="date-container-block">
                <small>Secondes</small>
                <h1>56</h1>
              </div>
            </div>
          </div>
          <div className="date-container-right">
            <div style={{
            display:scrollPosition===0?"none":"flex"
            }} onClick={()=>decrementScrollHandler()} className="in-dec">
                <img src={Image02} alt="" />

            </div>
            <div style={{
            display:isScrollRight?"flex":"none"
            }} onClick={()=>incrementScrollHandler()} className="in-dec">
            <img src={Image03} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-product">
        <div ref={productBlocksRef} className="product-blocks">
       {
        data.map((item)=>(
            <div className="product-block">
            <button>{(((item.oldPrice-item.newPrice)/item.newPrice)*100).toFixed(0)}%</button>
            <div className="product-block-position">
                <img src={Image05} alt="" />
            </div>
            <div className="product-block-position-2">
                <img src={Image06} alt="" />
            </div>
            <div className="product-block-image">
                <img src={item.image} alt="" />
                <button>Add To Cart</button>
            </div>
            <div className="product-block-text">
                <h1>{item.title}</h1>
                <div className="product-block-text-flex">
                    <p>${item.newPrice}</p>
                    <p style={{
                        color:"#000000",
                        opacity:"0.5"
                    
                    }}>${item.oldPrice}</p>
                </div>
                <div style={{
                    display:"flex",
                    gap:"8px",
                }} className="product-block-text-flex">
                    <img src={Image07} alt="" />
                    
                    <p style={{
                        color:"#000000",
                        opacity:"0.5"
                    
                    }}>(${item.ratign})</p>
                </div>

            </div>
          </div>
        ))
       }
        </div>
      </div>
      <div className="scroll-product-button">
        <Link to="/products">
        <button>View All Products</button>
        </Link>
      </div>
      <div style={{
        marginTop:"60px"
      }} className="line container"></div>
    </section>
  );
}

export default ScrollProduct;
