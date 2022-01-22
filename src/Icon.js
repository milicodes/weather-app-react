import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(promps) {
    const codeMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "03n": "CLOUDY",
      "04d": "PARTLY_CLOUDY_DAY",
      "04n": "PARTLY_CLOUDY_NIGHT",
      "09d": "SLEET",
      "09n": "SLEET",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "SLEET",
      "11n": "SLEET",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };
    return (
      <div className="Icon">
        <ReactAnimatedWeather
          icon={codeMapping[promps.defaultIcon]}
          color="#ffffff"
          size={promps.size}
          animate={true}
        />
      </div>
    );
}