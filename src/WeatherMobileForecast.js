import React from "react";
import Icon from "./Icon";

function maxTemperature() {
  let temperature = Math.round(promps.data.temp.max);
  return `${temperature}`
}

export function WeatherMobileForecast(promps) {
  return (
    <div className="WeatherForecast">
      <h4 className="col-12 day-forecast">{promps.data.dt}</h4>
      <div className="col-12 icon-forecast">
        {" "}
        <Icon defaultIcon={promps.data.weather[0].icon} size={60} />
      </div>
      <h5 className="col-12 day-forecast">
        <span className="max-temp">
          {promps.data.temp.max}° {""}
        </span>
        <span className="min-temp">{promps.data.temp.min}°</span>
      </h5>
    </div>
  );
}
