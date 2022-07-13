// useEffect(() => {
//     const exec = async () => {
//         const cityListWeather = await Promise.all(cityList.map(city => {
//             return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
//         }))
//         const filteredArr = cityListWeather.map((data) => {
//             return {
//                 data: data.data
//             }
//         });
//         const changedArray = filteredArr.map((city) => {
//             const weightedTemperature = ((city.data.main.temp / 100) * preferencesList.preferredWeather.temperature)
//             const weightedCloudiness = ((city.data.clouds.all / 100) * preferencesList.preferredWeather.cloudiness)
//             const weightedWindspeed = ((city.data.wind.speed / 100) * preferencesList.preferredWeather.windspeed)
//             const weightedScore = (weightedTemperature + weightedCloudiness + weightedWindspeed)
//             return city.data = { ...city.data, score: weightedScore };
//         });
//         changedArray.sort((a, b) => b.score - a.score)
//         setCityListWeatherData(changedArray)
//     }
//     exec();
// },[cityList])