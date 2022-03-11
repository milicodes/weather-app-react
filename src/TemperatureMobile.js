import React, { useState } from "react";
import "./TemperatureMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon.js";

export default function TemperatureMobile(promps) {
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = Days[promps.date.getDay()];
  let hours = promps.date.getHours();
  let minutes = promps.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const [unit, setUnit] = useState("celcius");

  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function handleCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (promps.defaultTemperature * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="TemperatureMobile d-block d-lg-none">
        {/*Left Container */}
        <div className="container-fluid d-block d-lg-none">
          <div className="row margin-temperature-mobile">
            {/*City Mobile*/}
            <div className="col-12">
              <h2 className="city-mobile">
                {promps.defaultCity}{" "}
              </h2>
            </div>
            <div className="col-3"></div>
            {/*Date mobile*/}
            <div className="col-6 date-margin-mobile">
              <h5 className="date-mobile">
                {day} {hours}:{minutes}
              </h5>
            </div>
            <div className="col-3"></div>
            {/*Gradient Container*/}
            <div className="container-fluid container-gradient">
              <div className="row">
                {/*Icon Mobile*/}
                <div className="col-12">
                  <div className="icon-mobile">
                    <Icon defaultIcon={promps.defaultIcon} size={160} />
                  </div>
                </div>
                {/*Temperature Mobile*/}
                <div className="col-12">
                  <h2 className="temperature-number-mobile">
                    {Math.round(promps.defaultTemperature)}°
                  </h2>
                </div>
                {/*Weather Mobile*/}
                <div className="col-12 ">
                  <h2 className="weather-mobile">{promps.defaultWeather}</h2>
                </div>
                {/*Unit convertion Mobile*/}
                <div className="col-6 margin-buttons-left-mobile ">
                  <button
                    type="submit"
                    className="btn btn-unit-celcius-mobile btn-primary"
                  >
                    °C
                  </button>
                </div>
                <div className="col-6 margin-buttons-right-mobile">
                  <button
                    type="submit"
                    className="btn btn-unit-mobile btn-primary"
                    onClick={handleFahrenheit}
                  >
                    °F
                  </button>
                </div>
              </div>
            </div>
            {/*Description Mobile*/}
            <div className="container description-mobile">
              <div className="row">
                <div className="col-6">
                  <h2 className="humidity">
                    <FontAwesomeIcon icon={faTint} /> {promps.defaultHumidity}%
                  </h2>
                </div>
                <div className="col-6">
                  <h2 className="wind">
                    {" "}
                    <FontAwesomeIcon icon={faWind} />
                    {Math.round(promps.defaultWind)} km/h
                  </h2>
                </div>
                <div className="col-6">
                  <h4 className="description-transparent">Humidity</h4>
                </div>
                <div className="col-6">
                  <h4 className="description-transparent">Wind</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TemperatureMobile d-block d-lg-none">
        {/*Left Container */}
        <div className="container-fluid d-block d-lg-none">
          <div className="row margin-temperature-mobile">
            {/*City Mobile*/}
            <div className="col-12">
              <h2 className="city-mobile">
                {promps.defaultCity}{" "}
              </h2>
            </div>
            {/*Date Mobile*/}
            <div className="col-3"></div>
            <div className="col-6 date-margin-mobile">
              <h5 className="date-mobile">
                {day} {hours}:{minutes}
              </h5>
            </div>
            <div className="col-3"></div>
            {/*Gradient Container*/}
            <div className="container-fluid container-gradient">
              <div className="row">
                {/*Icon Mobile*/}
                <div className="col-12">
                  <div className="icon-mobile">
                    <Icon defaultIcon={promps.defaultIcon} size={160} />
                  </div>
                </div>
                {/*Temperature Mobile*/}
                <div className="col-12 ">
                  <h2 className="temperature-number-mobile">
                    {Math.round(fahrenheit())}°
                  </h2>
                </div>
                {/*Weather Mobile*/}
                <div className="col-12">
                  <h2 className="weather-mobile">{promps.defaultWeather}</h2>
                </div>
                {/*Unit convertion Mobile*/}
                <div className="col-6 margin-buttons-left-mobile">
                  <button
                    type="submit"
                    className="btn btn-primary btn-unit-mobile"
                    onClick={handleCelcius}
                  >
                    °C
                  </button>
                </div>
                <div className="col-6  margin-buttons-right-mobile">
                  <button
                    type="submit"
                    className="btn btn-primary btn-unit-celcius-mobile"
                  >
                    °F
                  </button>
                </div>
              </div>
            </div>
            {/*Description Mobile*/}
            <div className="container description-mobile">
              <div className="row">
                <div className="col-6">
                  <h2 className="humidity">
                    <FontAwesomeIcon icon={faTint} /> {promps.defaultHumidity}%
                  </h2>
                </div>
                <div className="col-6">
                  <h2 className="wind">
                    {" "}
                    <FontAwesomeIcon icon={faWind} />
                    {Math.round(promps.defaultWind)} km/h
                  </h2>
                </div>
                <div className="col-6">
                  <h4 className="description-transparent">Humidity</h4>
                </div>
                <div className="col-6">
                  <h4 className="description-transparent">Wind</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
