import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Temperature from "./Temperature";
import axios from "axios";

export default function Search() {
  // State for realtime API weather
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChangeCity(event) {}

  if (weatherData.ready) {
    return (
      <div className="Search">
        {/* container */}
        <div className="space-desktop d-none d-lg-block"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    {/* (displayed for desktop) */}
                    <div className="input-group margin-top">
                      <div className="col-md-3 d-md-block d-none"></div>
                      <div className="col-md-4 d-md-block d-none">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a city"
                          aria-label="Type a city"
                          onChange={handleChangeCity}
                        />
                      </div>
                      <div className="col-md-3 d-md-block d-none search-button">
                        <button type="submit" className="btn btn-primary">
                          <FontAwesomeIcon icon={faSearch} />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* (displayed for mobile) */}
                  <div className="input-group margin-top d-block d-md-none">
                    <div className="container">
                      <div className="row">
                        <div className="col-8 d-md-none d-block">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type a city"
                            aria-label="Type a city"
                          />
                        </div>
                        <div className="col-4 d-md-none d-block">
                          <button type="submit" className="btn btn-primary">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*Temperature */}
        <Temperature data={weatherData} />
      </div>
    );
  } else {
    let city = "Tokyo";
    const apiKey = "a286ae6c0946e11743cd344706fe7fab";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
