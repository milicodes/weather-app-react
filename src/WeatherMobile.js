import React from "react";
import "./WeatherMobile.css";
import ForecastMobile from "./ForecastMobile";

export default function WeatherMobile() {
    return (
      <div className="WeatherMobile d-block d-lg-none col-bor">
        <div className="container">
          <div className="row margin-weather-mobile">
            <div className="col-12">
              <h2 className="weather-title col-bor">Rain</h2>
            </div>
            <div className="col-12 d-block d-lg-none">
              <h3 className="day col-bor">Today</h3>
            </div>
          </div>
          {/*Ending ofcontainer*/}
        </div>
        <ForecastMobile />
      </div>
    );
}