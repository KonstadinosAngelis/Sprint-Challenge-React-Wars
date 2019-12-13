import React, {useState, useEffect} from "react";
import axios from "axios"
import StarwarsCard from "./StarwarsCard";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default function StarwarsGrid(props) {
    return(
            <Wrapper>
                {props.data.map((element, index) => {
                    return <StarwarsCard key = {index} data = {props.data[index]}/>
                })};
            </Wrapper>
)}