import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="main-info">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li class="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="main-img"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
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
  );
}
