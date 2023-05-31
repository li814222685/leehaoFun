import video from "@/assets/video/home.mp4";
import "./index.less";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import WiDaySunny from "@icon/weather-tags/WiDaySunny";
import WiCelsius from "@/assets/icon/weather-tags/WiCelsius";

const Home = () => {
  const [time, changeTime] = useState(dayjs().format("HH:mm:ss"));
  useEffect(() => {
    setTimeout(() => {
      changeTime(dayjs().format("HH:mm:ss"));
    }, 1000);
  });
  return (
    <>
      <video className="fullscreenvideo" id="bgvid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="base-info">
        <span className="clock">{time}</span>
        <span className="weather">
          <WiDaySunny className="item-icon" />
          <span className="item-num">26</span>
          <WiCelsius className="suffix" />
        </span>
      </div>
      <div className="wrapper">
        <button className="login">Press Enter ↵</button>
      </div>
      <div className="curtain"></div>
    </>
  );
};

export default Home;
