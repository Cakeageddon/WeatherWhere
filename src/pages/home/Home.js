import React, {useEffect, useState, useContext} from "react";
import axios from "axios";

import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import SearchBar from "../../components/searchBar/SearchBar";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";

import './Home.css'
import {CityContext} from "../../context/CityContext";
import WeatherHomeCard from "../../components/weatherHomeCard/WeatherHomeCard";


function Home() {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [cityList] = useContext(CityContext)
    // const cityList = JSON.parse(localStorage.getItem('cities'));

    useEffect(() => {
        async function fetchData() {
            setError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }

        }

        if (location) {
            fetchData();
        }

    }, [location]);

    // let unsortedSavedCityArr = cityList.map((city) => {
    //     return <li key={city.id}>
    //         <WeatherHomeCard location={city.location} id={city.id}
    //         />
    //     </li>
    // })
    // let sortedSavedCityArr = unsortedSavedCityArr.sort((a, b) => a.calcScore - b.calcScore)

    return (
        <>
            <h1>Home</h1>
            <div className="weather-overview-container">
                <ul>
                    {cityList && cityList.map((city) => {
                        return <li key={city.id}>
                            <WeatherHomeCard location={city.location} id={city.id}
                            />
                        </li>
                    })}
                </ul>
            </div>

            <div className="weather-search-container">
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