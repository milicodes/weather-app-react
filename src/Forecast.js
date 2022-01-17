import React from "react";
import "./Forecast.css";
import Anime from "react-anime";


export default function Forecast() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          {/*Forecast inside */}
          <Anime
            className="animation-mobile"
            easing="easeOutElastic"
            direction="alternate"
            loop={true}
            delay={(el, index) => index * 240}
            translateY={-14}
          >
            <div className="container forecast-container day-one">
              <div className="row justify-content-center">
                <h4 className="col-12 day-forecast-top">MON</h4>
                <h4 className="col-12 icon-forecast">O</h4>
                <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
              </div>
            </div>
          </Anime>
        </div>

        <div className="col-2">
          <div className="container forecast-container day-two">
            <div className="row justify-content-center">
              <h4 className="col-12 day-forecast-top">TUE</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="container forecast-container day-three">
            <div className="row justify-content-center">
              <h4 className="col-12 day-forecast-top">WED</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="container forecast-container day-four">
            <div className="row justify-content-center">
              <h4 className="col-12 day-forecast-top">THU</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="container forecast-container day-five">
            <div className="row justify-content-center">
              <h4 className="col-12 day-forecast-top">FRI</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="container forecast-container day-six">
            <div className="row justify-content-center">
              <h4 className="col-12 day-forecast-top">SAT</h4>
              <h4 className="col-12 icon-forecast">O</h4>
              <h5 className="col-12 day-forecast-bot">23C / 9C</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
