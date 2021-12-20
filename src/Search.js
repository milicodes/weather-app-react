import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form>
              <div className="row">
                <div className="col-md-3 d-md-block d-none search-bar"></div>
                <div className="col-md-3 d-md-block d-none search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-2 d-md-none d-block search-bar"></div>
                <div className="col-5 d-md-none d-block search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
