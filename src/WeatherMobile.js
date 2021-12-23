import React from "react";
import "./WeatherMobile.css";

export default function WeatherMobile() {
    return (
      <div className="WeatherMobile col-bor">
        <div className="container">
          <div className="row">
            <div className="col d-block d-lg-none">
              <h2 className="weather-title col-bor">Rain</h2>
            </div>
          </div>
            <div className="col d-block d-lg-none">
              <h3 className="day col-bor">Today</h3>
            </div>
          </div>
      </div>
    );
}