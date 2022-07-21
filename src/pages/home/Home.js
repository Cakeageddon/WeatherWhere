import React, {useEffect, useState} from "react";
import axios from "axios";

import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import SearchBar from "../../components/searchBar/SearchBar";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";
import SavedCityListHome from "../../components/savedCityListHome/SavedCityListHome";
import './Home.css'
import Placeholder from '../../assets/images/weatherWherePlaceHolder.jpg';


function Home() {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {
            setError(false);
            toggleLoading(true);
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        }

        if (location) {
            fetchData();
        }
    }, [location]);


    return (
        <div className="home-outer-container">
            <div className="saved-city-list-container">
                <SavedCityListHome/>
            </div>
            <div className="image-and-search-container">
                <div className="image-container">
                    <img src={Placeholder} alt="placeholder" className="home-image"/>
                </div>

                <div className="weather-search-container">
                    <SearchBar setLocationHandler={setLocation}/>
                    {error &&
                        (<span className="wrong-location-error">
                            Oeps! Deze locatie bestaat niet. Kijk de spelling na.
                        </span>)}

                    <span className="location-details">
                        {loading && (<span>Loading...</span>)}

                        {weatherData && <div className="weather-home-details">
                            <h3>{weatherData.name} {kelvinToCelcius(weatherData.main.temp)}
                            <div className="icon-wrapper">
                                {iconMapper(weatherData.weather[0].main)}
                            </div></h3>
                            <h3>{weatherData.weather[0].description}</h3>
                            <h3>Windrichting: {windDirection(weatherData.wind.deg)}</h3>
                            <h3>Windkracht: {windSpeed(weatherData.wind.speed)}</h3>
                            <h3>Luchtvochtigheid: {weatherData.main.humidity}% </h3>
                            <h3>Bewolking: {weatherData.clouds.all}%</h3>
                            </div>

                        }
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Home