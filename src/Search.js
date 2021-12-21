import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      {/* Search bar container */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {/* Form */}
            <form>
              <div className="row">
                {/* Search bar (displayed for desktop) */}
                <div className="input-group">
                  <div className="col-md-3 d-md-block d-none search-bar"></div>
                  <div className="col-md-4 d-md-block d-none search-bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a city"
                      aria-label="Type a city"
                    />
                  </div>
                  <div className="col-md-1 d-md-block d-none search-bar">
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
                <div className="col-2 d-md-none d-block search-bar"></div>
                {/* Search bar (displayed for mobile) */}
                <div className="col-5 d-md-none d-block search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a city"
                    aria-label="Type a city"
                  />
                  <button type="submit" class="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
