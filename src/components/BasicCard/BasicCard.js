import React from "react";
import {Card} from "@mui/material"

export default function BasicCard(props) {
    const {city, country, temp, weather} = props;
    return <Card>
        <span>{city}, </span>
        <span>{country} </span>
        <span>{temp}ºC </span>
        <span>{weather}</span>
    </Card>
}