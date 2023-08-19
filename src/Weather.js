import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="myForm">
          <input
            type="text"
            id="city-input"
            placeholder="Type your city👋🏼"
            autofocus="on"
          />
          <input type="submit" value="Enter" id="enter-button" />
          <input type="submit" value="🗺️Current Location" id="current-button" />
        </div>

        <div className="listSmall">
          <div className="row">
            <div className="col-6">
              <h1>Berlin</h1>
              <br />
              <h3 id="dateHour"></h3>
              <br />
              <p>
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  id="icon"
                  width="20px"
                />
                <span id="current-temp"></span>
                <span id="celsius">°C</span>
              </p>
            </div>

            <div className="col-6">
              <div className="rightC">
                <p>
                  <span id="weather-description"></span>
                  <br />
                  <strong>Humidity: </strong>
                  <span id="humidity"></span>%
                  <br />
                  <strong>Wind: </strong>
                  <span id="wind"></span>km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="weatherForecast" id="forecast"></div>
      </form>

      <p className="credits">
        <a
          href="https://github.com/marinamun/final-weather-app"
          target="_blank"
        >
          Open-source code
        </a>
        by Marina Muñoz
      </p>
    </div>
  );
}
