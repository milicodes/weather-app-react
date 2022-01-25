import React, { useState } from "react";
import "./Forecast.css";
import Anime from "react-anime";
import axios from "axios";
import { WeatherForecast } from "./WeatherForecast";

export default function Forecast(promps) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          {/*Loop for Forecast Days*/}
          {forecast.map(function (dailyForecast, index) {
            {
              /*Condition for showing only 6 days*/
            }
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  {/*Forecast*/}
                  <div className="container forecast-container day-one">
                    <div className="row justify-content-center">
                      <WeatherForecast data={dailyForecast} />
                    </div>
                  </div>
                </div>
              );
            }
          })}
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
