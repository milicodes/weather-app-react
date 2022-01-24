import React, {useState} from "react";
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
          <div className="col-2">
            {/*Forecast inside */}
            {/*Animation Day 1*/}
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={100}
              endDelay={600}
              translateY={-30}
            >
              <div className="container forecast-container day-one">
                <div className="row justify-content-center">
                  <WeatherForecast data={forecast[0]}/>
                </div>
              </div>
            </Anime>
          </div>

          <div className="col-2">
            {/*Animation Day 2*/}
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={200}
              endDelay={500}
              translateY={-30}
            >
              <div className="container forecast-container day-two">
                <div className="row justify-content-center">
                  <h4 className="col-12 day-forecast-top">TUE</h4>
                  <h4 className="col-12 icon-forecast">O</h4>
                  <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
                </div>
              </div>
            </Anime>
          </div>
          <div className="col-2">
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={300}
              endDelay={400}
              translateY={-30}
            >
              <div className="container forecast-container day-three">
                <div className="row justify-content-center">
                  <h4 className="col-12 day-forecast-top">WED</h4>
                  <h4 className="col-12 icon-forecast">O</h4>
                  <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
                </div>
              </div>
            </Anime>
          </div>
          <div className="col-2">
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={400}
              endDelay={300}
              translateY={-30}
            >
              <div className="container forecast-container day-four">
                <div className="row justify-content-center">
                  <h4 className="col-12 day-forecast-top">THU</h4>
                  <h4 className="col-12 icon-forecast">O</h4>
                  <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
                </div>
              </div>
            </Anime>
          </div>
          <div className="col-2">
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={500}
              endDelay={200}
              translateY={-30}
            >
              <div className="container forecast-container day-five">
                <div className="row justify-content-center">
                  <h4 className="col-12 day-forecast-top">FRI</h4>
                  <h4 className="col-12 icon-forecast">O</h4>
                  <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
                </div>
              </div>
            </Anime>
          </div>
          <div className="col-2">
            <Anime
              className="animation-mobile"
              easing="easeInOutSine"
              direction="alternate"
              delay={600}
              endDelay={100}
              translateY={-30}
            >
              <div className="container forecast-container day-six">
                <div className="row justify-content-center">
                  <h4 className="col-12 day-forecast-top">SAT</h4>
                  <h4 className="col-12 icon-forecast">O</h4>
                  <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
                </div>
              </div>
            </Anime>
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
