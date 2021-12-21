import React from "react";
import Search from "./Search";
import "./App.css";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      {/*Search bar */}
      <Search />
      {/*Temperature */}
      <Temperature />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
