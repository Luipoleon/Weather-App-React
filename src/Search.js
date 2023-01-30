import React from "react";
import "./search.css";
import img from "./img/searchIcon.png";

export default function Search(){
  return(
    <div className="search">
      <form>
          <input 
            type="search"
            placeholder ="Enter a city"
          />
          <button className="button">
            <img src={img} alt ="Search icon"/>
          </button>
      </form>
    </div>
  );
}