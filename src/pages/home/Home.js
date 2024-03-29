import React, {useEffect, useState, useContext} from "react";
import axios from "axios";

import {AuthContext} from "../../context/AuthContext";

import './Home.css'

import kelvinToCelcius from "../../helpers/kelvinToCelsius";
import SearchBar from "../../components/searchBar/SearchBar";
import iconMapper from "../../helpers/iconMapper";
import windDirection from "../../helpers/windDirection";
import windSpeed from "../../helpers/windSpeed";
import SavedCityListHome from "../../components/savedCityListHome/SavedCityListHome";
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

import Lightning from '../../assets/images/weatherWherePlaceHolder.jpg';


function Home() {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const {loggedIn} = useContext(AuthContext)


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
        <div className="home-background">
            <HeaderWeather/>
            <NavBar/>
            <div className="home-outer-container">
                {loggedIn ?
                    <section className="saved-city-list-container">
                        <SavedCityListHome/>
                    </section>
                    :
                    <article className="saved-city-loggedout-container">
                        <p className="saved-city-loggedout-message">
                            Log in of maak een account aan om hier jouw favoriete of opgeslagen steden te weergeven!
                        </p>
                    </article>
                }
                <div className="image-and-search-container">
                    <div className="image-container">
                        <img src={Lightning} alt="Thunderstruck" className="home-image"/>
                    </div>

                    <section className="weather-search-container">
                        <SearchBar setLocationHandler={setLocation}/>
                        {error &&
                            (<span className="wrong-location-error">
                            Oeps! Deze locatie bestaat niet. Kijk de spelling na.
                        </span>)}

                        <span className="location-details">
                        {loading && (<span>Loading...</span>)}

                            {weatherData && <article className="weather-home-details">
                                <h4>{weatherData.name} {kelvinToCelcius(weatherData.main.temp)}
                                    <div className="icon-wrapper">
                                        {iconMapper(weatherData.weather[0].main)}
                                    </div>
                                </h4>
                                <p>{weatherData.weather[0].description}</p>
                                <p>Windrichting: {windDirection(weatherData.wind.deg)}</p>
                                <p>Windkracht: {windSpeed(weatherData.wind.speed)}</p>
                                <p>Luchtvochtigheid: {weatherData.main.humidity}% </p>
                                <p>Bewolking: {weatherData.clouds.all}%</p>
                            </article>
                            }
                        </span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home