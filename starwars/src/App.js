import React from "react";
import "./App.css";
import StarwarsGrid from "./components/StarwarsGrid";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarwarsGrid />
    </div>
  );
}

export default App;
