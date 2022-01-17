import React from "react";
import "./Credits.css"

export default function Credits() {
    return (
      <div className="Credits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="credits-section">
                {" "}
                Coded by Mili Pernia,{" "}
                <a
                  className="link-github"
                  href="https://github.com/milicodes/weather-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open sourced on Github.
                </a>
                Hosted on Netlify
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
}