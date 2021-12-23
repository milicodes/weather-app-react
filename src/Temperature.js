import React from "react";
import "./Temperature.css";
import Weather from "./Weather";
import WeatherMobile from "./WeatherMobile";
import Forecast from "./Forecast";
import TemperatureMobile from "./TemperatureMobile";
import Credits from "./Credits";

export default function Temperature() {
  return (
    <div className="Temperature margin-top">
      {/*Main container */}
      <div className="container">
        <div className="row">
          {/*Left Section Desktop*/}
          <div className="col-6 d-none d-lg-block">
            {/*Left Container Desktop*/}
            <div className="container-fluid col-bor">
              <div className="row">
                {/*Icon*/}
                <div className="col col-bor">
                  <h2 className="icon">23</h2>
                </div>
                {/*Temperature*/}
                <div className="col col-bor">
                  <h2 className="temperature-number">23</h2>
                </div>
                {/*Description*/}
                <div className="container">
                  <div className="row">
                    <div className="col-3 col-bor">
                      <h2 className="humidity">80%</h2>
                    </div>
                    <div className="col-3 col-bor">
                      <h2 className="wind">5 km/h</h2>
                    </div>
                    {/*Unit convertion buttons*/}
                    <div className="col col-bor">
                      <button type="submit" className="btn  btn-primary">
                        °C
                      </button>
                      <button
                        type="submit"
                        className="btn btn-desk btn-primary"
                      >
                        °F
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Left Section Mobile */}
          <TemperatureMobile />
          {/*Right container from main container*/}
          <div className="col-6 d-none d-lg-block">
            {/*Right container for Weather*/}
            {/* Weather for Desktop*/}
            <Weather />
            <Forecast />
          </div>
        </div>
        {/*Ending of Right Container*/}
      </div>
      {/*Weather for Mobile*/}
      <WeatherMobile />
      {/*Credits*/}
      <Credits />
    </div>
  );
}
