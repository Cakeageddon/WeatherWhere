import React from "react";
import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";
import windSockIcon from "../../assets/icons/icons8-windsock-50.png"
import humidityIcon from "../../assets/icons/icons8-humidity-50.png"
import cloudIcon from "../../assets/icons/icons8-clouds-64.png"
import "./WeatherHomeCard.css"

function WeatherHomeCard({
                             name,
                             tempK,
                             score,
                             weatherMain,
                             weatherDescription,
                             windDegree,
                             weatherWindSpeed,
                             humidity,
                             clouds,
                             id,
                         }) {

    return (
        <article className="weather-card" key={id}>
            <div className="weather-name-score">
                <h4>{name} </h4>
                <p>Score:</p>
                <p>{score}</p>
            </div>

            <div className="weather-description">
                <p>{kelvinToCelcius(tempK)}</p>
                <div className="icon-wrapper">
                    {iconMapper(weatherMain)}
                </div>
                <p>{weatherDescription}</p>
            </div>

            <div className="weather-stats">
                    <p><span className="stats"><img src={windSockIcon} alt="Windsok" width="20"/>
                        : {windSpeed(weatherWindSpeed)}, {windDirection(windDegree)}</span> </p>
                    <p><span className="stats"><img src={humidityIcon} alt="Luchtvochtigheid" width="20"/>
                        : {humidity}%</span></p>
                    <p><span className="stats"><img src={cloudIcon} alt="Bewolking" width="20"/>
                        : {clouds}%</span></p>
            </div>
        </article>
    )
}

export default WeatherHomeCard