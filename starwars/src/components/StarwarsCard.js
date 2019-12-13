import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
    border: 1px solid red;
    width: 180px;
`;


export default function StarwarsCard(props) {
    return (
        <Wrapper>
            <Card>
                <CardBody>
                    <CardTitle>Name :{props.data.name}</CardTitle>
                    <CardSubtitle>Birth Date :{props.data.birth_year}</CardSubtitle>
                    <ul>
                        <li><CardText>Gender :{props.data.gender}</CardText></li>
                        <li><CardText>Hair color :{props.data.hair_color}</CardText></li>
                        <li><CardText>Heigh :{props.data.height}</CardText></li>
                    </ul>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Wrapper>
    )
}