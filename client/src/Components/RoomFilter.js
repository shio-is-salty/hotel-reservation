export const RoomFilter = () => {
  return (
    <div className="room-filter">
      <select>
        <option value="" disable selected>Room Type</option>
        <option value="King Size">Modern</option>
      </select>
    
      <select>
        <option value="" disable selected>Bed Type</option>
        <option value="King Size">King Size</option>
      </select>

      <select>
        <option value="" disable selected>Window</option>
        <option value="King Size">di ko alam haha</option>
      </select>

      <button className="btn">Update Results</button>
    </div>
  )
}
