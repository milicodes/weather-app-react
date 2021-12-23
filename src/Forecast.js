import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 col-bor">
            <h4 className="day-forecast">MON</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast">TUE</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast">WED</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast">THU</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast">SAT</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-2 col-bor">
            <h4 className="day-forecast">SUN</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
        </div>
      </div>
    );
}