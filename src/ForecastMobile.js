import React, { useState } from "react";
import "./ForecastMobile.css";
import axios from "axios";
import Anime from "react-anime";
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
        <Anime
          className="animation-mobile"
          easing="easeInOutSine"
          direction="alternate"
          delay={10}
          translateY={-12}
          loop={true}
        >
          <div className="container forecast-container d-block d-lg-none">
            <div className="row">
              {/*Loop for Forecast Days*/}
              {forecast.map(function (dailyForecast, index) {
                /*Condition for showing only 6 days + after today*/
                if (index >= 1 && index < 7) {
                  return (
                    <div className="col-4 day-one-mobile" key={index}>
                      {/*Forecast*/}

                      <div className="container">
                        <div className="row justify-content-center">
                          <WeatherMobileForecast data={dailyForecast} />
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </Anime>
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
