import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">MON</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">TUE</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">WED</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">THU</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">SAT</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast-top">SUN</h4>
            <h4 className="icon-forecast">O</h4>
            <h5 className="day-forecast-bot">23C/9C</h5>
          </div>
        </div>
      </div>
    );
}