import React, { useState } from "react";
import "./Temperature.css";
import Forecast from "./Forecast";
import TemperatureMobile from "./TemperatureMobile";
import Credits from "./Credits";
import ForecastMobile from "./ForecastMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import MainDate from "./MainDate";
import Icon from "./Icon";

export default function Temperature(promps) {
  
  const [unit, setUnit] = useState("celcius");
  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function handleCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (promps.data.temp * 9/5) + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="Temperature margin-top">
        {/*Main container */}
        <div className="container">
          <div className="row">
            {/*Left Section Desktop*/}
            <div className="col-12 d-none d-lg-block margin-sides">
              {/*Left Container Desktop*/}
              <div className="container main-container-gradient ">
                <div className="row">
                  {/*City*/}
                  <div className="col-6 ">
                    <h2 className="city">
                      {promps.data.city}
                    </h2>
                  </div>
                  <div className="col-6 "></div>
                  {/*Date*/}
                  <div className="col-auto border-date ">
                    <h5 className="date-desktop">
                      <MainDate date={promps.data.date} />
                    </h5>
                  </div>
                  <div className="col-6 "></div>
                  {/*Temperature*/}
                  <div className="col-6">
                    <h2 className="temperature-number ">
                      {Math.round(promps.data.temp)}°
                    </h2>
                  </div>
                  {/*Icon*/}
                  <div className="col-6">
                    <div className="icon">
                      <Icon
                        defaultIcon={promps.data.icon} size={160}
                      />
                    </div>
                  </div>

                  {/*Convertion*/}
                  <div className="container">
                    <div className="row">
                      {/*Unit convertion buttons*/}
                      <div className="col-6">
                        <button
                          type="submit"
                          className="btn btn-unit-celcius  btn-primary"
                        >
                          °C
                        </button>
                        <button
                          type="submit"
                          className="btn btn-desk btn-unit btn-primary"
                          onClick={handleFahrenheit}
                        >
                          °F
                        </button>
                      </div>
                      <div className="col-6">
                        <h2 className="weather-name text-capitalize">
                          {promps.data.weather}
                        </h2>
                      </div>
                      <div className="col-3"></div>
                      <div className="col-3"></div>
                      <div className="col-3">
                        <h3 className="humidity description-size">
                          {" "}
                          <FontAwesomeIcon
                            icon={faTint}
                            className="opacity-icon"
                          />{" "}
                          {promps.data.humidity}%
                        </h3>
                      </div>
                      <div className="col-3">
                        <h3 className="wind description-size">
                          <FontAwesomeIcon
                            icon={faWind}
                            className="opacity-icon"
                          />{" "}
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
              <Forecast coord={promps.coord} />
            </div>
          </div>
          {/*Ending of Right Container*/}
        </div>
        {/*Forecast for Mobile*/}
        <ForecastMobile coord={promps.coord} />
        {/*Credits*/}
        <Credits />
      </div>
    );
  } else {
    return (
      <div className="fahrenheit">
        {" "}
        <div className="Temperature margin-top">
          {/*Main container */}
          <div className="container">
            <div className="row">
              {/*Left Section Desktop*/}
              <div className="col-12 d-none d-lg-block margin-sides">
                {/*Left Container Desktop*/}
                <div className="container main-container-gradient">
                  <div className="row">
                    {/*City*/}
                    <div className="col-6">
                      <h2 className="city">
                        {promps.data.city}
                      </h2>
                    </div>
                    <div className="col-6"></div>
                    {/*Date*/}
                    <div className="col-auto border-date">
                      <h5 className="date-desktop">
                        <MainDate date={promps.data.date} />
                      </h5>
                    </div>
                    <div className="col-6"></div>
                    {/*Temperature*/}
                    <div className="col-6">
                      <h2 className="temperature-number">
                        {Math.round(fahrenheit())}°
                      </h2>
                    </div>
                    {/*Icon*/}
                    <div className="col-6">
                      <div className="icon">
                        <Icon defaultIcon={promps.data.icon} size={160} />
                      </div>
                    </div>

                    {/*Convertion*/}
                    <div className="container">
                      <div className="row">
                        {/*Unit convertion buttons*/}
                        <div className="col-6">
                          <button
                            type="submit"
                            className="btn  btn-primary btn-unit"
                            onClick={handleCelcius}
                          >
                            °C
                          </button>
                          <button
                            type="submit"
                            className="btn btn-desk btn-primary btn-unit-celcius"
                          >
                            °F
                          </button>
                        </div>
                        <div className="col-6">
                          <h2 className="weather-name text-capitalize">
                            {promps.data.weather}
                          </h2>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3"></div>
                        <div className="col-3">
                          <h3 className="humidity description-size">
                            {" "}
                            <FontAwesomeIcon
                              icon={faTint}
                              className="opacity-icon"
                            />{" "}
                            {promps.data.humidity}%
                          </h3>
                        </div>
                        <div className="col-3">
                          <h3 className="wind description-size">
                            <FontAwesomeIcon
                              icon={faWind}
                              className="opacity-icon"
                            />{" "}
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
                <Forecast coord={promps.coord} />
              </div>
            </div>
            {/*Ending of Right Container*/}
          </div>
          {/*Forecast for Mobile*/}
          <ForecastMobile coord={promps.coord} />
          {/*Credits*/}
          <Credits />
        </div>
      </div>
    );
  }
}
