import { useState } from "react"
import "../Styles/header.css"

import ringerIcon from "../Assets/icons/ringer.png"
import menuIcon from "../Assets/icons/menu.png"
export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleHandler = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <div>
    <header>
      <div className="contact">
        <img src={ringerIcon} alt="ringer" />
        <span className="number">(63) 9761234567</span>
      </div>

      <h1>BELLUS HOTEL</h1>

      <button className="btn">BOOK NOW</button>
      <img onClick={toggleHandler} className="menu" src={menuIcon} alt="menu" />

    </header>

      {toggleMenu && 

      <ul className="menu-items">
        <li>LOGIN</li>
        <li>SIGNUP</li>
        <li>ABOUT</li>
        <li>BOOK NOW</li>
      </ul>

      }
    </div>
  )
}
