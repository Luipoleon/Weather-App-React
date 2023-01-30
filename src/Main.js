import React from "react";
import img1 from "./img/nublado.png";
import img2 from "./img/wind.png";
import img3 from "./img/humedad.png";
import "./main.css";

export default function Main() {
  return (
    <main className="main">
      <div className="city">Guadalajara</div>
      <div className="day">
        {" "}
        Sunday {" "}|<span className="time"> 9:30 p.m.</span>
      </div>
      <div className="temp">
        26
        <span className="CF">C°</span>
      </div>
      <div className="weather">
        <div>
          Overcast Clouds
          <span className="icon"> {" "}| 
          <img src={img1} alt="Main temp icon"/>
          </span>
        </div>
        <div>
          <span className="icon"><img src={img2} alt="Wind icon"/></span>Wind: 2.24 mph
        </div>
        <div>
          <span className="icon"><img src={img3} alt="Humidity icon"/></span>Humidity: 2.24 mph
        </div>
      </div>
    </main>
  );
}
