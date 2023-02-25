import "../Styles/home.css"
import { Hero } from "../Components/Hero"
import { RoomCard } from "../Components/RoomCard"
import { ReviewCard } from "../Components/ReviewCard"
import { QuestionForm } from "../Components/QuestionForm"
export const Home = () => {
  return (
    <div className="home">
      <Hero />

      <section className="best-selling-rooms">
        <h2 className="title">HAVE A LOOK AT OUR BEST SELLING ROOMS</h2>
        <div className="highlighted-rooms">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </section>

      <section className="customer-reviews">
        <h2 className="title">REVIEWS BY OUR LATEST CUSTOMERS</h2>
        <div className="reviews">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>

      <section className="customer-questions">
        <h2 className="title">HAVE A QUESTION?</h2>
        <div>
          <QuestionForm />
          <div className="lets-talk">
            <h2>LET'S TALK</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, accumsan lacinia lacinia sed, egestas ut eros. Phasellus sagittis enim vitae nunc pellentesque ullamcorper. Ut tincidunt urna congue, gravida mi id, dignissim dui. Donec nec facilisis mi. Donec ut bibendum turpis</p>
          </div>
        </div>

      </section>
      
    </div>
  )
}
