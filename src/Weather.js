import React from "react";
import "./Weather.css";
import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="myForm">
          <input
            type="text"
            className="city-input"
            placeholder="Type your city👋🏼"
            autofocus="on"
          />
          <input type="submit" value="Enter" className="enter-button" />
          <input
            type="submit"
            value="🗺️Current Location"
            className="current-button"
          />
        </div>

        <div className="listSmall">
          <div className="row">
            <div className="col-6">
              <h1>Berlin</h1>
              <br />
              <h3 className="dateHour">22:22</h3>
              <br />
              <p>
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  className="icon"
                  width="20px"
                  alt=""
                />
                <span className="current-temp"></span>
                <span className="celsius">°C</span>
              </p>
            </div>

            <div className="col-6">
              <div className="rightC">
                <p>
                  <span className="weather-description"></span>
                  <br />
                  <strong>Humidity: </strong>
                  <span className="humidity"></span>%
                  <br />
                  <strong>Wind: </strong>
                  <span className="wind"></span>km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="weatherForecast"></div>
      </form>

      <p className="credits">
        <a
          href="https://github.com/marinamun/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Marina Muñoz
      </p>
    </div>
  );
}
