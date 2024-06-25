import React from "react";
import Image02 from "../../assets/svg/image02.svg";
import Image03 from "../../assets/svg/image03.svg";
import phone from "../../assets/svg/phone.svg";
import "./ProductByCategory.scss";
function ProductByCategory() {
  const category = [
    "Phones",
    "Computers",
    "SmartWatch",
    "Camera",
    "HeadPhones",
    "Gaming",
  ];
  return (
    <section style={{
        paddingTop:"80px"
    }}>
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
            <h1>Browse By Category</h1>
          </div>
          <div className="date-container-right">
            <div className="in-dec">
              <img src={Image02} alt="" />
            </div>
            <div className="in-dec">
              <img src={Image03} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container category-container">
        <div className="category-blocks">
            {
                category.map((item)=>(
                    <div className="category-block">
                    <img src={phone} alt="" />
                    <p>{item}</p>
                  </div>

                ))
            }
         
        </div>
      </div>
    </section>
  );
}

export default ProductByCategory;
