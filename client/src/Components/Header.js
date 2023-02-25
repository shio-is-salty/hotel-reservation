import "../Styles/header.css"

import ringerIcon from "../Assets/icons/ringer.png"
export const Header = () => {
  return (
    <header>
      <div className="contact">
        <img src={ringerIcon} alt="ringer" />
        <span className="number">(63) 9761234567</span>
      </div>

      <h1>BELLUS HOTEL</h1>

      <button className="btn">BOOK NOW</button>
    </header>
  )
}
