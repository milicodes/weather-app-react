import React from "react";
import Icon from "./Icon";


export function WeatherMobileForecast(promps) {
  function maxTemperature() {
    let temperature = Math.round(promps.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperatureMin = Math.round(promps.data.temp.min);
    return `${temperatureMin}°`;
  }

  function day() {
    let date = new Date(promps.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }
  return (
    <div className="WeatherForecast">
      <h4 className="col-12 day-forecast">{day()}</h4>
      <div className="col-12 icon-forecast">
        {" "}
        <Icon defaultIcon={promps.data.weather[0].icon} size={60} />
      </div>
      <h5 className="col-12 day-forecast">
        <span className="max-temp">{maxTemperature()}</span>
        <span className="min-temp">{minTemperature()}</span>
      </h5>
    </div>
  );
}
