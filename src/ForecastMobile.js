import React, { useState, useEffect } from "react";
import "./ForecastMobile.css";
import axios from "axios";
import Anime from "react-anime";
import { WeatherMobileForecast } from "./WeatherMobileForecast";

export default function ForecastMobile(promps) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function coordsLoaded() {
    let apiKey = `a286ae6c0946e11743cd344706fe7fab`;
    let lat = promps.coord.lat;
    let long = promps.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
  }

  // Refreshing Forecast after search bar is loaded
  useEffect(() => {
    setLoaded(false);
  }, [promps.coord]);

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
    coordsLoaded();
    return null;
  }
}
