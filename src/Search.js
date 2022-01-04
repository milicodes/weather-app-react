import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="Search">
      {/* container */}
      <div className="space-desktop d-none d-lg-block"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {/* Form */}
            <form>
              <div className="container col-bor">
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
                  <div className="container col-bor">
                    <div className="row col-bor">
                      <div className="col-8 d-md-none d-block col-bor">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a city"
                          aria-label="Type a city"
                        />
                      </div>
                      <div className="col-4 d-md-none d-block col-bor">
                        <button type="submit" className="btn btn-primary">
                          S
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
    </div>
  );
}
