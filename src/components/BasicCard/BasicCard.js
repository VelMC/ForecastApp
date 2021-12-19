import React from "react";
import {Card} from "@mui/material"
import "./BasicCard.scss"

export default function BasicCard(props) {
    const {city, country, temp, weather} = props;
    return <Card className="cartita">
        <div className="place">
            <span>{city}, </span>
            <span>{country} </span>
        </div>
        
        <div className="temp">{Math.round(temp)}ºC </div>
        <div className="weather">{weather}</div>
    </Card>
}