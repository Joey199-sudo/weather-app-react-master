import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div>
      <a
        href="https://www.shecodes.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.weather.shecodes.io/images/logo.png"
          alt="sheCodes"
          className="logo"
        />
      </a>
      <form>
        <input type="search" placeholder="Enter a city" className="forms" />
        <input type="submit" value="search" className="search" />
      </form>
      <div className="part2">
        <h1>
          San <br />
          Francisco
        </h1>
        <ul>
          <li>
            <span> Friday 14:46 </span>, few clouds
          </li>
          <li>
            Humidity:<span className="w">77%</span>, Wind:
            <span className="w">4.63km/h</span>
          </li>
        </ul>
      </div>

      <div className="part3">
        🌥️<span className="temp-"> 10 &deg;</span>
      </div>

      <div className="part4">
        <div className="col">
          <p>Fri</p>
          <p className="clouds">☁️</p>
          <p>
            <span className="temp">14&deg;</span>{" "}
            <span className="max">9&deg;</span>
          </p>
        </div>
        <div className="col">
          <p>Sat</p>
          <p className="clouds">🌧️</p>
          <p>
            <span className="temp">15&deg;</span>{" "}
            <span className="max">12&deg;</span>
          </p>
        </div>
        <div className="col">
          <p>Sun</p>
          <p className="clouds">☁️</p>
          <p>
            <span className="temp">15&deg;</span>{" "}
            <span className="max">13&deg;</span>
          </p>
        </div>
        <div className="col">
          <p>Mon</p>
          <p className="clouds">🌥️</p>
          <p>
            <span className="temp">15&deg;</span>{" "}
            <span className="max">12&deg;</span>
          </p>
        </div>
        <div className="col">
          <p>Tue</p>
          <p className="clouds">☁️</p>
          <p>
            <span className="temp">17&deg;</span>{" "}
            <span className="max">13&deg;</span>
          </p>
        </div>
      </div>

      <footer>
        This Weather App was coded by Johannah and  &nbsp;
         <a href="https://www.shecodes.io/" target="_blank"
        rel="noopener noreferrer"> sheCodes</a>
        and is  &nbsp;
         <a href="https://github.com/Joey199-sudo/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"> 
           open-sourced on GitHub
        </a> &nbsp;
        and  &nbsp;
        <a href="https://shecodes-weather.netlify.app/" target="_blank"
        rel="noopener noreferrer">hosted on Netifly</a>
      </footer>
    </div>
  );
}
