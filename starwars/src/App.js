import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import StarwarsGrid from "./components/StarwarsGrid";
import Pagation from "./components/Pagation";

const App = () => {
  const [currentChar, setCurrentChar] = useState([]);

useEffect(() => { 
    axios.get("https://swapi.co/api/people")
    .then(response => {
      setCurrentChar(response.data.results);
    });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Pagation data = {currentChar} />
      <StarwarsGrid data = {currentChar}/>
    </div>
  );
}

export default App;
