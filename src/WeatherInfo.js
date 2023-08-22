import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="first-section">
        <h1>{props.data.city}</h1>
        <ul className="main-info">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li class="text-capitalize">{props.data.description}</li>
        </ul>
      </div>

      <div className="middle-section">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <WeatherIcon code={props.data.icon} size={45} />
              <div className="current-temperature">
                {Math.round(props.data.temperature)}°C
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <ul>
              <li>
                <strong>Humidity:</strong>
                {props.data.humidity}%
              </li>
              <li>
                <strong>Wind:</strong>
                {props.data.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
