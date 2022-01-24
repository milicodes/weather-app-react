import React from "react";
import Icon from "./Icon";

export function WeatherForecast(promps) {
    return (
      <div className="WeatherForecast">
        <h4 className="col-12 day-forecast-top">{promps.data.dt}</h4>
        <div className="col-12 icon-forecast">
          {" "}
          <Icon defaultIcon={promps.data.weather[0].icon} size={60} />
        </div>
        <h5 className="col-12 day-forecast-bot">
          <span className="max-temp">
            {Math.round(promps.data.temp.max)}° {""}
          </span>
          <span className="min-temp">{Math.round(promps.data.temp.min)}°</span>
        </h5>
      </div>
    );
}