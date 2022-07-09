import React, {useState} from "react";

function Preferences() {
    const [preferences, setPreferences] = useState({
        temperature: 50,
        cloudiness: 0,
        windspeed: 0,
    })
    // const [windspeed, setWindSpeed] = useState('1')
    // const [temperature, setTemperature] = useState('')
    // const [cloudiness, setCloudiness] = useState('')

    return (
        <>
            <fieldset>
                <legend>Geef hier jouw voorkeuren aan</legend>

                <div className="temperature-container">
                    <label htmlFor="temperature" className="margin">
                        Temperatuur:
                    </label>
                    <br/>
                    Koud
                    <input
                        type="range"
                        id="temperature-slider"
                        name="temperature"
                        min="0"
                        max="100"
                        value={preferences.temperature}
                        onChange={
                            (e) => setPreferences({
                                    ...preferences,
                                    temperature: (e.target.value)
                                }
                            )
                        }
                    />
                    Warm {preferences.temperature}
                </div>

                <div className="cloudiness-container">
                    <label htmlFor="cloudiness" className="margin">Bewolking %:
                    </label>
                    <br/>
                    Geen
                    <input
                        type="range"
                        id="cloudiness-slider"
                        name="cloudiness"
                        min="0"
                        max="100"
                        value={preferences.cloudiness}
                        onChange={
                            (e) => setPreferences({
                                    ...preferences,
                                    cloudiness: (e.target.value)
                                }
                            )
                        }
                    />
                    Veel {preferences.cloudiness}
                </div>

                <div className="windspeed-container">
                    <label htmlFor="windspeed" className="margin">
                        Windkracht (Schaal van beaufort):
                    </label>
                    <br/>
                    Geen
                    <input
                        type="range"
                        id="windspeed-slider"
                        name="windspeed"
                        min="0"
                        max="12"
                        value={preferences.windspeed}
                        onChange={
                            (e) => setPreferences({
                                    ...preferences,
                                    windspeed: (e.target.value)
                                }
                            )
                        }
                    />
                    Veel {preferences.windspeed}
                </div>
            </fieldset>

        </>
    )
}

export default Preferences