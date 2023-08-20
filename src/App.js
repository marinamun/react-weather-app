import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This proyect was coded by Marina Muñoz, open-sourced on{" "}
          <a href="https://github.com/marinamun/react-weather-app">GitHub</a>
        </p>
      </footer>
    </div>
  );
}
