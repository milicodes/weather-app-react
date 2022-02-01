import React, { useState, useEffect } from "react";
import "./Forecast.css";
import Anime from "react-anime";
import axios from "axios";
import { WeatherForecast } from "./WeatherForecast";

export default function Forecast(promps) {
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
      <div className="container">
        <div className="row">
          {/*Loop for Forecast Days*/}
          {forecast.map(function (dailyForecast, index) {
            /*Condition for showing only 6 days + after today*/
            if (index >= 1 && index < 7) {
              return (
                <div className="col-2" key={index}>
                  {/*Forecast*/}
                  <Anime
                    className="animation-mobile"
                    easing="easeInOutSine"
                    direction="alternate"
                    delay={50}
                    translateY={-20}
                    loop={true}
                  >
                    <div className="container forecast-container day-one">
                      <div className="row justify-content-center">
                        <WeatherForecast data={dailyForecast} />
                      </div>
                    </div>
                  </Anime>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    coordsLoaded();
    return null;
  }
}
