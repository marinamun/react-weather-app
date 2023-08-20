import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      date: "Wednesday 22:22",
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul className="main-info">
          <li>{weatherData.date}</li>
          <li class="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="main-img"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li><strong>Humidity:</strong>{weatherData.humidity}%</li>
              <li><strong>Wind:</strong>{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2870469bf4e2d9e7713d0410e1682df1";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
