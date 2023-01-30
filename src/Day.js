import React from "react";

export default function Day({icon,name,temp}){
  return (
    <div className="day"> 
      <div className="name">{name}</div>
      <div className="icon"><img src={icon} alt="weather-icon"/></div>
      <div className="temp">{temp} C°</div>
    </div>
  );
}