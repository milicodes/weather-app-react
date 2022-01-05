import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";
import Forecast from "./Forecast";
import TemperatureMobile from "./TemperatureMobile";
import Credits from "./Credits";
import ForecastMobile from "./ForecastMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import ReactAnimatedWeather from "react-animated-weather";


export default function Temperature() {
  // State for realtime API weather
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].main,
    });


    console.log(response.data.weather[0].main);
    setReady(true);
  }

  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 120,
    animate: true,
  };
  if (ready) {
    return (
      <div className="Temperature margin-top">
        {/*Main container */}
        <div className="container col-bor">
          <div className="row">
            {/*Left Section Desktop*/}
            <div className="col-12 d-none d-lg-block">
              {/*Left Container Desktop*/}
              <div className="container margin-sides col-bor">
                <div className="row">
                  <div className="col-6 col-bor">
                    <h2 className="city">
                      <button
                        type="submit"
                        className="btn btn-desk btn-primary"
                      >
                        <FontAwesomeIcon icon={faLocationArrow} />
                      </button>
                      {weatherData.city}
                    </h2>
                  </div>
                  <div className="col-6 col-bor"></div>
                  {/*Temperature*/}
                  <div className="col-6 col-bor">
                    <h2 className="temperature-number">
                      {Math.round(weatherData.temp)}°
                    </h2>
                  </div>
                  {/*Icon*/}
                  <div className="col-6 col-bor">
                    <div className="icon">
                      <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                      />
                    </div>
                  </div>

                  {/*Convertion*/}
                  <div className="container">
                    <div className="row">
                      {/*Unit convertion buttons*/}
                      <div className="col-6 col-bor">
                        <button type="submit" className="btn  btn-primary">
                          °C
                        </button>
                        <button
                          type="submit"
                          className="btn btn-desk btn-primary"
                        >
                          °F
                        </button>
                      </div>
                      <div className="col-6 col-bor">
                        <h2 className="weather-name text-capitalize">
                          {weatherData.weather}
                        </h2>
                      </div>
                      <div className="col-6 col-bor">
                        <h3 className="humidity">
                          {" "}
                          <FontAwesomeIcon icon={faTint} />{" "}
                          {weatherData.humidity}%
                        </h3>
                      </div>
                      <div className="col-6 col-bor">
                        <h3 className="wind">
                          <FontAwesomeIcon icon={faWind} />{" "}
                          {Math.round(weatherData.wind)} km/h
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Left Section Mobile */}
            <TemperatureMobile
              defaultTemperature={weatherData.temp}
              defaultHumidity={weatherData.humidity}
              defaultWind={weatherData.wind}
              defaultWeather={weatherData.weather}
            />
            {/*Right container from main container*/}
            <div className="col-12  d-none d-lg-block">
              {/*Right container for Weather*/}
              {/* Weather for Desktop*/}
              <Forecast />
            </div>
          </div>
          {/*Ending of Right Container*/}
        </div>
        {/*Forecast for Mobile*/}
        <ForecastMobile />
        {/*Credits*/}
        <Credits />
      </div>
    );
  } else {
    let city = "Tokyo";
    const apiKey = "62a816282d3b51b7451838a6b7b63934";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
