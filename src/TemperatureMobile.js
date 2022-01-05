import React from "react";
import "./TemperatureMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import ReactAnimatedWeather from "react-animated-weather";

export default function TemperatureMobile(promps) {

   const defaults = {
     icon: "CLEAR_DAY",
     color: "goldenrod",
     size: 100,
     animate: true,
   };

    return (
      <div className="TemperatureMobile d-block d-lg-none">
        {/*Left Container */}
        <div className="container-fluid d-block d-lg-none col-bor">
          <div className="row margin-temperature-mobile">
            {/*City Mobile*/}
            <div className="col-12 col-bor ">
              <h2 className="city-mobile">
                <button type="submit" className="btn btn-primary">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </button>{" "}
                San Francisco{" "}
              </h2>
            </div>
            {/*Icon Mobile*/}
            <div className="col-12 col-bor">
              <div className="icon-mobile">
                <ReactAnimatedWeather
                  icon={defaults.icon}
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}
                />
              </div>
            </div>
            {/*Temperature Mobile*/}
            <div className="col-12 col-bor ">
              <h2 className="temperature-number-mobile">
                {Math.round(promps.defaultTemperature)}°
              </h2>
            </div>
            {/*Unit convertion Mobile*/}
            <div className="col-6 col-bor ">
              <button type="submit" className="btn btn-primary">
                °C
              </button>
            </div>
            <div className="col-6 col-bor">
              <button type="submit" className="btn btn-primary">
                °F
              </button>
            </div>
            {/*Weather Mobile*/}
            <div className="col-12 col-bor ">
              <h2 className="weather-mobile">{promps.defaultWeather}</h2>
            </div>
            {/*Description Mobile*/}
            <div className="container">
              <div className="row">
                <div className="col-6 col-bor">
                  <h2 className="humidity">
                    <FontAwesomeIcon icon={faTint} /> {promps.defaultHumidity}%
                  </h2>
                </div>
                <div className="col-6 col-bor">
                  <h2 className="wind">
                    {" "}
                    <FontAwesomeIcon icon={faWind} />
                    {Math.round(promps.defaultWind)} km/h
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}