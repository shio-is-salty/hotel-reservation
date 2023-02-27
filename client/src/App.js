import './App.css';

// Components
import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"
import { RoomList } from "./Pages/RoomList"
import { Footer } from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <RoomList />
      <Footer />
    </div>
  );
}

export default App;
