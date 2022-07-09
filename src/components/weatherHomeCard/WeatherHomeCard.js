import React, {useEffect, useState} from "react";
import axios from "axios";
import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";

function WeatherHomeCard({location, id}) {
    const [locationWeather, setLocationWeather] = useState([])
    const [wind, setWind] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchLocationWeather() {
            setError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                setWind(result.data.wind)
                setLocationWeather(result.data);

                console.log(result.data)
                console.log(wind)
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchLocationWeather();
    }, []);

    return (
        error ?
            <span className="wrong-location-error">
                Oeps! Deze locatie bestaat niet. Kijk de spelling na.
            </span>
            :
            locationWeather && locationWeather.wind && locationWeather.weather && locationWeather.main && locationWeather.clouds &&
            <article className="weather-card" key={id}>
                <h3>{locationWeather.name} {kelvinToCelcius(locationWeather.main.temp)}</h3>
                <div className="icon-wrapper">
                    {iconMapper(locationWeather.weather[0].main)}
                </div>
                <p>{locationWeather.weather[0].description}</p>
                {wind && <p>Windrichting: {windDirection(locationWeather.wind.deg)}</p>}
                <p>Windkracht: {windSpeed(locationWeather.wind.speed)}</p>
                <p>Luchtvochtigheid: {locationWeather.main.humidity}% </p>
                <p>Bewolking: {locationWeather.clouds.all}%</p>
            </article>

    )
}

export default WeatherHomeCard