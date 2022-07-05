import React, {useEffect, useState} from "react";
import axios from "axios";

import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import SearchBar from "../../components/searchBar/SearchBar";
import iconMapper from "../../helpers/iconMapper";

import './Home.css'
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";

function Home() {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                setWeatherData(result.data);
                console.log(result.data)
            } catch (e) {
                console.error(e);
                setError(true);
            }

        }

        if (location) {
            fetchData();
        }

    }, [location]);

    return (
        <>
        <h1>Home</h1>
        <div className="weather-search-main">
            <SearchBar setLocationHandler={setLocation}/>

            {error && (<span className="wrong-location-error">
              Oeps! Deze locatie bestaat niet. Kijk de spelling na.
            </span>)}

            <span className="location-details">
            {/*{loading && (<span>Loading...</span>)}*/}

                {weatherData && <>
                    <h3>{weatherData.name} {kelvinToCelcius(weatherData.main.temp)}</h3>
                    <div className="icon-wrapper">
                        {iconMapper(weatherData.weather[0].main)}
                    </div>

                    <h3>{weatherData.weather[0].description}</h3>
                    <h3>Windrichting: {windDirection(weatherData.wind.deg)}</h3>
                    <h3>Windkracht: {windSpeed(weatherData.wind.speed)}</h3>
                    <h3>Luchtvochtigheid: {weatherData.main.humidity}% </h3>
                    <h3>Bewolking: {weatherData.clouds.all}%</h3>

                </>}
          </span>
        </div>
    </>)
}

export default Home