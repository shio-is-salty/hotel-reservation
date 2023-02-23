import "../Styles/home.css"
import { Hero } from "../Components/Hero"
import { RoomCard } from "../Components/RoomCard"
import { ReviewCard } from "../Components/ReviewCard"
export const Home = () => {
  return (
    <div className="home">
      <Hero />

      <section>
        <h2 className="my-64 text-center">HAVE A LOOK AT OUR BEST SELLING ROOMS</h2>
        <div className="highlighted-rooms">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </section>
      

     <section>
        <h2 className="my-64 text-center">REVIEWS BY OUR LATEST CUSTOMERS</h2>
        <div className="highlighted-reviews">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </div>
  )
}
