import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 col-bor">
            {/*Forecast inside */}
            <div className="container col-bor">
              <div className="row col-bor justify-content-center">
                <h4 className="col-12 day-forecast-top col-bor">MON</h4>
                <h4 className="col-12 icon-forecast col-bor">O</h4>
                <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
              </div>
            </div>
          </div>
          <div className="col-2 col-bor">
            <div className="container col-bor">
              <div className="row col-bor justify-content-center">
                <h4 className="col-12 day-forecast-top col-bor">TUE</h4>
                <h4 className="col-12 icon-forecast col-bor">O</h4>
                <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
              </div>
            </div>
          </div>
          <div className="col-2 col-bor">
            <div className="container col-bor">
            <div className="row col-bor justify-content-center">
              <h4 className="col-12 day-forecast-top col-bor">WED</h4>
              <h4 className="col-12 icon-forecast col-bor">O</h4>
              <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
            </div>
            </div>
          </div>
          <div className="col-2 col-bor">
            <div className="container col-bor">
            <div className="row col-bor justify-content-center">
              <h4 className="col-12 day-forecast-top col-bor">THU</h4>
              <h4 className="col-12 icon-forecast col-bor">O</h4>
              <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
            </div>
            </div>
          </div>
          <div className="col-2 col-bor">
            <div className="container col-bor">
            <div className="row col-bor justify-content-center">
              <h4 className="col-12 day-forecast-top col-bor">FRI</h4>
              <h4 className="col-12 icon-forecast col-bor">O</h4>
              <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
            </div>
            </div>
          </div>
          <div className="col-2 col-bor">
            <div className="container col-bor">
            <div className="row col-bor justify-content-center">
              <h4 className="col-12 day-forecast-top col-bor">SAT</h4>
              <h4 className="col-12 icon-forecast col-bor">O</h4>
              <h5 className="col-12 day-forecast-bot col-bor">23C / 9C</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}