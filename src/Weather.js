import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <input type="search" placeholder="Enter a city..."/>
        <input type="submit" value="Search"/>
      </form>


      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather"
          />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
