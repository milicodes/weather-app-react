import React from "react";
import "./Temperature.css";
import Forecast from "./Forecast";
import TemperatureMobile from "./TemperatureMobile";
import Credits from "./Credits";
import ForecastMobile from "./ForecastMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import MainDate from "./MainDate";
import Icon from "./Icon";

export default function Temperature(promps) {


  return (
    <div className="Temperature margin-top">
      {/*Main container */}
      <div className="container col-bor">
        <div className="row">
          {/*Left Section Desktop*/}
          <div className="col-12 d-none d-lg-block">
            {/*Left Container Desktop*/}
            <div className="container margin-sides col-bor">
              <div className="row">
                {/*City*/}
                <div className="col-6 col-bor">
                  <h2 className="city">
                    <button type="submit" className="btn btn-desk btn-primary">
                      <FontAwesomeIcon icon={faLocationArrow} />
                    </button>
                    {promps.data.city}
                  </h2>
                </div>
                <div className="col-6 col-bor"></div>
                {/*Date*/}
                <div className="col-6 col-bor">
                  <h5 className="date-desktop">
                    <MainDate date={promps.data.date} />
                  </h5>
                </div>
                <div className="col-6 col-bor"></div>
                {/*Temperature*/}
                <div className="col-6 col-bor">
                  <h2 className="temperature-number">
                    {Math.round(promps.data.temp)}°
                  </h2>
                </div>
                {/*Icon*/}
                <div className="col-6 col-bor">
                  <div className="icon">
                    <Icon
                      defaultIcon={promps.data.icon}
                      description={promps.data.description}
                    />
                  </div>
                </div>

                {/*Convertion*/}
                <div className="container">
                  <div className="row">
                    {/*Unit convertion buttons*/}
                    <div className="col-6 col-bor">
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
                    <div className="col-6 col-bor">
                      <h2 className="weather-name text-capitalize">
                        {promps.data.weather}
                      </h2>
                    </div>
                    <div className="col-6 col-bor">
                      <h3 className="humidity">
                        {" "}
                        <FontAwesomeIcon icon={faTint} /> {promps.data.humidity}
                        %
                      </h3>
                    </div>
                    <div className="col-6 col-bor">
                      <h3 className="wind">
                        <FontAwesomeIcon icon={faWind} />{" "}
                        {Math.round(promps.data.wind)} km/h
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Left Section Mobile */}
          <TemperatureMobile
            defaultTemperature={promps.data.temp}
            defaultHumidity={promps.data.humidity}
            defaultWind={promps.data.wind}
            defaultWeather={promps.data.weather}
            defaultCity={promps.data.city}
            defaultDate={promps.data.date}
            date={promps.data.date}
            defaultIcon={promps.data.icon}
            description={promps.data.description}
          />
          {/*Right container from main container*/}
          <div className="col-12  d-none d-lg-block">
            {/*Right container for Weather*/}
            {/* Weather for Desktop*/}
            <Forecast />
          </div>
        </div>
        {/*Ending of Right Container*/}
      </div>
      {/*Forecast for Mobile*/}
      <ForecastMobile />
      {/*Credits*/}
      <Credits />
    </div>
  );
}
