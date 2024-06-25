import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/svg/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Heart from "../../assets/svg/Heart.svg";
import Basket from "../../assets/svg/Basket.svg";
import Search from "../../assets/svg/Search.svg";
import i18next from "i18next";
import { useSelector } from "react-redux";

function Header() {
  const {items} = useSelector((state)=>state.products)
  const { t } = useTranslation();
  const [isScroll , setIsScroll] = useState(false)
  const [language, setLanguage] = useState(i18next.language);
  function hadleChanchLanguage(event) {
    const lng = event.target.value;
    i18next.changeLanguage(lng);
    setLanguage(lng);
  }
  function handleScroll () {
    if(window.scrollY>=48) {
     setIsScroll(true)
    }
    else{
       setIsScroll(false)
    }
    

  }
  window.addEventListener("scroll",handleScroll)
  return (
    <>
      <div className="top-header">
        <div className="container tranlator-container">
          <div className="tranlator">
            <div className="tranlator-main">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <h1>ShopNow</h1>
            </div>
            <div className="tranlator-right">
              <select
                value={language}
                onChange={hadleChanchLanguage}
                name=""
                id=""
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="kg">Кыргызский</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <header className={isScroll?"scrolling":"no-scrolling"}>
        <div className="container header-container">
          <div className="header-left">
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>
            <ul>
              <li>
                <Link to="/">{t("Home")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("Contact")}</Link>
              </li>
              <li>
                <Link to="/about">{t("About")}</Link>
              </li>
              <li>
                <Link to="/signup">{t("Sign Up")}</Link>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <form className="header-input">
              <input type="text" placeholder="What are you looking for?" />
              <img src={Search} alt="" />
            </form>
            <div className="basket-container">
              <div>
                <Link to="/heart">
                <img src={Heart} alt="" />
                </Link>
              </div>
              <Link to="/basket">
                <img src={Basket} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="line"></div>
      <div style={isScroll?{

        height:"100px"
        
      }:{
        height:"0"
      }}>
      
      </div>
    </>
  );
}

export default Header;
