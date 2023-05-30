import "./App.css";
import video from "./assets/video/home.mp4";

function App() {
  return (
    <>
      <video className="fullscreenvideo" id="bgvid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
