import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route, useLocation } from 'react-router-dom'
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import About from "../About/About";
import './mainStyle.css'
import '../media/media-1.css'

import { ReactComponent as MyLogo } from '../images/logo.svg'
function Main() {

  const [backColor, setBackColor] = useState("white");
  const [color, setColor] = useState("green");
  const [textColor, setTextColor] = useState("black");
  const [movieLeft, setMovieLeft] = useState("10");
  const [changeIcon, setChangeIcon] = useState("fa-sharp fa-solid fa-gears");
  const [isActive, setIsActive] = useState("none");
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(true)

  const settingChange = () => {
    //  open-close color box
    setIsActive("block");
    setMovieLeft("170");
    setChangeIcon("fa-regular fa-circle-xmark");
    if (isActive === "block") {
      setIsActive("none");
      setMovieLeft("10");
      setChangeIcon("fa-sharp fa-solid fa-gears");
    }
  };
  const mood = () => {
    setShow(!show);

    if (show) {
      setBackColor("black ");
      setTextColor("white");
    } else {
      setBackColor("white");
      setTextColor("black");
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu)
    const secondMenu = document.querySelector(".secondMenu")

    if (showMenu) {
      secondMenu.style.display = 'block'
    } else {
      secondMenu.style.display = 'none  '
    }
  }

  useEffect(() => {
    const body = document.body.style
    body.backgroundColor = backColor
    body.transition = '2s'
  }, [backColor])
  return (
    <div className="mainPage" >

      <div className="openMenu" onClick={handleMenu} >
        {showMenu ? (
          <i class="fa-solid fa-list" style={{ color: color }} ></i>
        ) : (
          <i class="fa-regular fa-circle-xmark" style={{ color: color }}  ></i>
        )}  
      </div>


      <div className="secondMenu">
        <ul>
          <li><NavLink className={'secondLink'} to="/" >Home </NavLink></li>
          <li><NavLink className={'secondLink'} to="/about" >About </NavLink></li>
          <li><NavLink className={'secondLink'} to="/services" >Services </NavLink></li>
          <li><NavLink className={'secondLink'} to="/contact" >Contact </NavLink></li>
        </ul>
      </div>
      <div className="menu">
        <div
          className="logo"
          style={{
            borderColor: color,
            color: textColor
          }}
        >
          <MyLogo className="logoStyle" />
        </div>

        <div className="list">
          <ul>
            {/* HOME  */}
            <li>
              <NavLink
                className="linkStyle"
                style={{ color: textColor }}
                to="/"
              >
                <i class="fa-solid fa-house" style={{ color: color }}></i>
                Home
              </NavLink>
            </li>
            {/* ABOUT  */}
            <li>
              <NavLink
                className="linkStyle"
                style={{ color: textColor }}
                to="/about"
              >
                <i
                  class="fa-solid fa-address-card"
                  style={{ color: color }}
                ></i>
                About
              </NavLink>
            </li>
            {/* SERVICES  */}
            <li>
              <NavLink
                className="linkStyle"
                style={{ color: textColor }}
                to="/services"
              >
                <i class="fa-solid fa-server" style={{ color: color }}></i>
                Services
              </NavLink>
            </li>
            {/* CONTACT  */}
            <li>
              <NavLink
                className="linkStyle"
                style={{ color: textColor }}
                to="contact"
              >
                <i
                  class="fa-regular fa-address-card"
                  style={{ color: color }}
                ></i>
                Contact
              </NavLink>
            </li>
          </ul>
        </div> 
      </div>
 
      <div
        className="setting"
        style={{
          right: movieLeft + "px",
          color: textColor
        }}
      >
        {/* MOON  */}
        {show ? (
          <i class="fa-solid fa-moon" style={{ color: color }} onClick={mood}></i>
        ) : (
          <i class="fa-regular fa-sun" style={{ color: color }} onClick={mood}></i>
        )}

        <i onClick={settingChange} style={{ color: color }} className={changeIcon}></i>
      </div>

      <div className="changer" style={{ display: isActive }}>
        <p style={{ color: textColor }}> Theme colors </p>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          <i style={{ color: "green" }} class="fa-solid fa-circle"></i>
        </button>
        <button
          onClick={() => {
            setColor("rgb(255, 131, 58)");
          }}
        >
          <i style={{ color: "orange" }} class="fa-solid fa-circle"></i>
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          <i style={{ color: "blue" }} class="fa-solid fa-circle"></i>
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          <i style={{ color: "red" }} class="fa-solid fa-circle"></i>
        </button>
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={<Home color={color} textColor={textColor} />}
        />
        <Route
          path="/about"
          element={<About color={color} textColor={textColor} />}
        />
        <Route
          path="/services"
          element={<Services color={color} textColor={textColor} />}
        />
        <Route
          path="/contact"
          element={<Contact color={color} textColor={textColor} />}
        />
      </Routes>

    </div>

  )
}

export default Main 