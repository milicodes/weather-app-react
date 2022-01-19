import React from "react";
import "./ForecastMobile.css";

export default function ForecastMobile() {
  return (
    <div className="ForecastMobile">
      <div className="container forecast-container d-block d-lg-none col-bor">
        <div className="row">
          <div className="col-4 day-one-mobile">
            <h4 className="day-forecast">MON</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-4 day-two-mobile">
            <h4 className="day-forecast">TUE</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-4 day-three-mobile">
            <h4 className="day-forecast">WED</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-4 day-four-mobile">
            <h4 className="day-forecast">THU</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-4 day-five-mobile">
            <h4 className="day-forecast">SAT</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
          <div className="col-4 day-six-mobile">
            <h4 className="day-forecast">SUN</h4>
            <h4 className="col-12 icon-forecast">O</h4>
            <h5 className="day-forecast">23C/9C</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
