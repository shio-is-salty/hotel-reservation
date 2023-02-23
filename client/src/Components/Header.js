import "../Styles/header.css"

import ringerIcon from "../Assets/icons/ringer.png"
export const Header = () => {
  return (
    <header>
      <div className="contact">
        <img src={ringerIcon} alt="ringer" />
        <h3>(63) 9761234567</h3>
      </div>

      <h1>BELLUS HOTEL</h1>

      <button>BOOK NOW</button>
    </header>
  )
}
