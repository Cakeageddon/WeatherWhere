import React, {useContext, useEffect, useState} from "react";
import {PreferencesContext} from "../../context/PreferencesContext";
import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";


function WeatherHomeCard({name, tempK, score, weatherMain, weatherDescription, windDegree, weatherWindSpeed, humidity, clouds}) {

    return (
            <article className="weather-card">
                <h3>{name} {kelvinToCelcius(tempK)}</h3>
                <h3>Score: {score}</h3>
                <div className="icon-wrapper">
                    {iconMapper(weatherMain)}
                </div>
                <p>{weatherDescription}</p>
                <p>Windrichting: {windDirection(windDegree)}</p>
                <p>Windkracht: {windSpeed(weatherWindSpeed)}</p>
                <p>Luchtvochtigheid: {humidity}% </p>
                <p>Bewolking: {clouds}%</p>
            </article>
    )
}

export default WeatherHomeCard