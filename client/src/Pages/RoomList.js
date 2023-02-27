import { RoomFilter } from "../Components/RoomFilter"
import { RoomCard } from "../Components/RoomCard"

import "../Styles/room-list.css"
export const RoomList = () => {
  return (
    <section className="room-list">
      <RoomFilter />

      <div className="result">
        <h4>10 ROOMS MATCH YOUR CRITERIA</h4>
        <h6>Select your room or use our filter above the customize your stay.</h6>
      </div>

      <div className="rooms">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />

      </div>
    </section>
  )
}
