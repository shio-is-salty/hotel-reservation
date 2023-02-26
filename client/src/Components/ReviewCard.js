import userIcon from "../Assets/icons/user.png"
import ratingsIcon from "../Assets/icons/ratings.png"
export const ReviewCard = () => {
  return (
    <div className="review-card">
      
      <div className="body">

        <div className="user-rating">
         <img className="icon" src={userIcon} alt="user" />

         <div className="rating-container">
           <h3 className="user-name">KYLE PAGAYON</h3>
           <div className="room-rating">
             <h5 className="room-name">SIMPLY CALMING</h5>
             <img src={ratingsIcon} alt="ratings" />
           </div>
          </div>
        </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, accumsan lacinia lacinia sed, egestas ut eros. Phasellus sagittis enim vitae nunc pellentesque ullamcorper. Ut tincidunt urna congue, gravida mi id, dignissim dui. Donec nec facilisis mi. Donec ut bibendum turpis</p>

      </div>
    </div>
  )
}
