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
    </div>
  );
}

export default App;
