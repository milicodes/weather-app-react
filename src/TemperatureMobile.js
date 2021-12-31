import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./TemperatureMobile.css";

export default function TemperatureMobile() {
    return (
      <div className="TemperatureMobile d-block d-lg-none">
        {/*Left Container */}
        <div className="container-fluid d-block d-lg-none col-bor">
          <div className="row margin-temperature-mobile">
            {/*Icon Mobile*/}
            <div className="col col-bor ">
              <h2 className="icon-mobile">Icon</h2>
            </div>
            {/*Temperature Mobile*/}
            <div className="col col-bor">
              <h2 className="temperature-number-mobile">23</h2>
            </div>
            {/*Description Mobile*/}
            <div className="container">
              <div className="row">
                <div className="col-3 col-bor">
                  <h2 className="humidity">  80%</h2>
                </div>
                <div className="col-3 col-bor">
                  <h2 className="wind">5 km/h</h2>
                </div>
                {/*Unit convertion buttons for mobile*/}
                <div className="col-3 col-bor">
                  <button type="submit" className="btn btn-primary">
                    °C
                  </button>
                </div>
                <div className="col-3 col-bor">
                  <button type="submit" className="btn btn-primary">
                    °F
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}