import React, {useContext, useEffect, useState} from "react";
import {CityContext} from "../../context/CityContext";
import axios from "axios";
import {PreferencesContext} from "../../context/PreferencesContext";

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
            let filteredArr = cityListWeather.map((data) => {
                return {
                    data: data.data
                }
            })
            setCityListWeatherData(filteredArr)
        }
        exec();
    },[cityList])

    console.log(cityListWeatherData)

    // const addScore = cityListWeatherData && cityListWeatherData.wind && cityListWeatherData.weather &&cityListWeatherData.main && cityListWeatherData.clouds &&
    //     cityListWeatherData.map((dataset) => {
    //         const weightedScore = (((dataset.main.temp / 100) * preferencesList.preferredWeather.temperature) +
    //             ((dataset.clouds.all / 100) * preferencesList.preferredWeather.cloudiness) + ((dataset.wind.speed / 100) * preferencesList.preferredWeather.windspeed))
    //         return ({...dataset, score: weightedScore})
    //     })

    const addScore = cityListWeatherData && cityListWeatherData.wind && cityListWeatherData.weather &&cityListWeatherData.main && cityListWeatherData.clouds &&
        cityListWeatherData.map((dataset) => {
        const weightedTemperature = ((dataset.main.temp / 100) * preferencesList.preferredWeather.temperature)
        const weightedCloudiness = ((dataset.clouds.all / 100) * preferencesList.preferredWeather.cloudiness)
        const weightedWindspeed = ((dataset.wind.speed / 100) * preferencesList.preferredWeather.windspeed)
        const weightedScore = (weightedTemperature + weightedCloudiness + weightedWindspeed)
        return {...dataset, score: weightedScore}
        }
        )

    console.log(addScore)

    // function calcScore(locationWeather, preferencesList) {
    //     const weightedTemperature = ((locationWeather.main.temp / 100) * preferencesList.preferredWeather.temperature)
    //     const weightedCloudiness = ((locationWeather.clouds.all / 100) * preferencesList.preferredWeather.cloudiness)
    //     const weightedWindspeed = ((locationWeather.wind.speed / 100) * preferencesList.preferredWeather.windspeed)
    //
    //     return (weightedWindspeed + weightedTemperature + weightedCloudiness)
    // }

    return(
        <h1> We Just testing here bois. </h1>
    )
}

export default SavedCityListHome