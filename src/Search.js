import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {/* Form */}
            <form>
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
                  <div className="col-md-2 d-md-block d-none">
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
                {/* (displayed for mobile) */}
                <div className="input-group margin-top">
                  <div className="col-3 d-md-none d-block"></div>
                  <div className="col-5 d-md-none d-block">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a city"
                      aria-label="Type a city"
                    />
                  </div>
                  <div className="col-3 d-md-none d-block">
                    <button type="submit" class="btn btn-primary">
                      S
                    </button>
                    <button type="submit" class="btn btn-primary">
                      S
                    </button>
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
