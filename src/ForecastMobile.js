import React, { useState } from "react";
import "./ForecastMobile.css";
import axios from "axios";
import { WeatherMobileForecast } from "./WeatherMobileForecast";


export default function ForecastMobile(promps) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastMobile">
        <div className="container forecast-container d-block d-lg-none">
          <div className="row">
            <div className="col-4 day-one-mobile">
            <WeatherMobileForecast data={forecast[0]} />
            </div>
            <div className="col-4 day-two-mobile">
              <h4 className="day-forecast">TUE</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="day-forecast">23C/9C</h5>
            </div>
            <div className="col-4 day-three-mobile">
              <h4 className="day-forecast">WED</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="day-forecast">23C/9C</h5>
            </div>
            <div className="col-4 day-four-mobile">
              <h4 className="day-forecast">THU</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="day-forecast">23C/9C</h5>
            </div>
            <div className="col-4 day-five-mobile">
              <h4 className="day-forecast">SAT</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="day-forecast">23C/9C</h5>
            </div>
            <div className="col-4 day-six-mobile">
              <h4 className="day-forecast">SUN</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="day-forecast">23C/9C</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `1f9a7a458edc58ca1a5745fa660a62f3`;
    let lat = promps.coord.lat;
    let long = promps.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
