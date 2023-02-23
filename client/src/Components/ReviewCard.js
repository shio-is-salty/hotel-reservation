import userIcon from "../Assets/icons/user.png"
import ratingsIcon from "../Assets/icons/ratings.png"
export const ReviewCard = () => {
  return (
    <div className="review-card">
      <img src="https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg" alt="room" />
      
      <div className="body">

        <div className="user-rating">
         <img className="icon" src={userIcon} alt="user" />

         <div className="rating-container">
           <h2 className="user-name">KYLE PAGAYON</h2>
           <div className="room-rating">
             <h4 className="room-name">SIMPLY CALMING</h4>
             <img src={ratingsIcon} alt="ratings" />
           </div>
          </div>
        </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, accumsan lacinia lacinia sed, egestas ut eros. Phasellus sagittis enim vitae nunc pellentesque ullamcorper. Ut tincidunt urna congue, gravida mi id, dignissim dui. Donec nec facilisis mi. Donec ut bibendum turpis</p>

      </div>
    </div>
  )
}
