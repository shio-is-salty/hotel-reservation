import leftIcon from "../Assets/icons/left.png"
import rightIcon from "../Assets/icons/right.png"
import cameraIcon from "../Assets/icons/camera.png"
export const RoomCard = () => {
  return (
    <div className="room-card">
      <div className="overlay">
        <div className="header">
          <h2 className="title">AESTHETIC MODERN</h2>
          {/* <div className="bg-controls"> */}
          {/*   <img src={leftIcon} alt="left" /> */}
          {/*   <img src={cameraIcon} alt="camera" /> */}
          {/*   <span>1 OF 4</span> */}
          {/*   <img src={rightIcon} alt="right" /> */}
          {/* </div> */}
        </div>

        <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, accumsan lacinia lacinia sed, egestas ut eros. Phasellus sagittis enim </p>

        <div className="price">
          <h1>₱4,000</h1>
          <div className="tax">
            <h6>GBP/STAY</h6>
            <h6>Including taxes & fees</h6>
          </div>
        </div>

        <button className="btn">RESERVE NOW</button>

      </div>
    </div>
  )
}
