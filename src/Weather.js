import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="container col-bor">
        <div className="row">
          <div className="col-12">
            {/*Weather*/}
            <h2 className="weather-name col-bor">Rain</h2>
          </div>
          {/*Date*/}
          <div className="col-12">
            <h3 className="day col-bor">Today</h3>
          </div>
        </div>
      </div>
    );
}