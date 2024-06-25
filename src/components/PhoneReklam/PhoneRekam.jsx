import axios from "axios";
import React, { useEffect, useState } from "react";
import Image01 from "../../assets/svg/image01.svg";
import "./PnoneReklam.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ImagePhone from "../../assets/svg/ImagePhone.svg";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const API = "http://178.128.162.248:8070/api/v1/category/categories/";
function PhoneRekam() {
  //   const [data, setData] = useState([]);
  //   async function getCategory() {
  //     try {
  //     const res = await axios.get(API)

  //     console.log(res)

  //     } catch (error) {
  //         console.log(error ,"error is getCategory")
  //     }
  //   }
  //   useEffect(() => {
  //     getCategory();
  //   }, []);
  return (
    <div>
      {/* <div className="line"></div> */}
      <div className="container reklam-container">
        <div className="reklam-filter">
          <div className="filter-category">
            <div className="filter-category-text">
              <p>Woman’s Fashion</p>
              <img src={Image01} alt="" />
            </div>
            <div className="filter-category-text">
              <p>Men’s Fashion</p>
              <img src={Image01} alt="" />
            </div>
            <div className="filter-category-text">
              <p>Electronics</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Home & Lifestyle</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Medicine</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Sports & Outdoor</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Baby’s & Toys</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Groceries & Pets</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
            <div className="filter-category-text">
              <p>Health & Beauty</p>
              {/* <img src={Image01} alt="" /> */}
            </div>
          </div>
          <div className="line-right"></div>
        </div>
        <div className="reklam-bootstrap">
          <Carousel
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Carousel.Item
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                style={{
                  width: "892px",
                  height: "344px",
                  objectFit:"cover"
                }}
                src={ImagePhone}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                style={{
                  width: "892px",
                  height: "344px",
                  objectFit:"cover"
                }}
                src={ImagePhone}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                style={{
                  width: "892px",
                  height: "344px",
                  objectFit:"cover"
                }}
                src={ImagePhone}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PhoneRekam;
