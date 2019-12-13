import React, {useState, useEffect} from "react";
import axios from "axios"
import StarwarsCard from "./StarwarsCard";

export default function StarwarsGrid() {
const [currentChar, setCurrentChar] = useState([]);

useEffect(() => { 
    axios.get("https://swapi.co/api/people")
    .then(response => {
      setCurrentChar(response.data.results);
    //   console.log(response.data.results)
    });
    }, []);

    return(
            <div>
                {currentChar.map((element, index) => {
                    // console.log(index);
                    return <StarwarsCard key = {index} data = {currentChar[index]}/>
                })};
            </div>
)}