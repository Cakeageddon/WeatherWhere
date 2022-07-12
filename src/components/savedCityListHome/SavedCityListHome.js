import React, {useContext, useEffect, useState} from "react";
import {CityContext} from "../../context/CityContext";
import axios from "axios";
import {PreferencesContext} from "../../context/PreferencesContext";
import {set} from "react-hook-form";

function SavedCityListHome() {
    const [cityList] = useContext(CityContext)
    const [preferencesList] = useContext(PreferencesContext)
    const [cityListWeatherData, setCityListWeatherData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const exec = async () => {
            const cityListWeather = await Promise.all(cityList.map(city => {
                return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
            }))
            const filteredArr = cityListWeather.map((data) => {
                return {
                    data: data.data
                }
            }
            )
            const changedArray = filteredArr.map((city) => {
                const weightedTemperature = ((city.data.main.temp / 100) * preferencesList.preferredWeather.temperature)
                const weightedCloudiness = ((city.data.clouds.all / 100) * preferencesList.preferredWeather.cloudiness)
                const weightedWindspeed = ((city.data.wind.speed / 100) * preferencesList.preferredWeather.windspeed)
                const weightedScore = (weightedTemperature + weightedCloudiness + weightedWindspeed)
                return city.data = { ...city.data, score: weightedScore };
            });
            changedArray.sort((a, b) => b.score - a.score)

            setCityListWeatherData(changedArray)
        }
        exec();
    },[cityList])

    console.log(cityListWeatherData)

    // const cityListWeatherDataCopy = [...cityListWeatherData]
    // cityListWeatherDataCopy.sort((a, b) => b.score - a.score)
    // console.log(cityListWeatherDataCopy)

    return(
        <h1> We Just testing here bois. </h1>
    )
}

export default SavedCityListHome