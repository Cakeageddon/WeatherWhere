import React from "react";

function Preferences() {
    const temperatureValue =

    return (
        <>
            <fieldset>
                <legend>Geef hier jouw voorkeuren aan</legend>
                <label htmlFor="temperature" className="margin">Temperatuur:</label>
                <span>Koud<input type="range" id="temperature-slider" name="temperature" min="0" max="100"/>Warm</span><br/>
                <label htmlFor="cloudiness" className="margin">Bewolking:</label>
                <span>Geen<input type="range" id="cloudiness-slider" name="cloudiness" min="0" max="100"/>Veel</span><br/>
                <label htmlFor="windspeed" className="margin">Windkracht:</label>
                <span>Geen<input type="range" id="windspeed-slider" name="windspeed" min="0" max="100"/>Veel</span>
            </fieldset>

        </>
    )
}

export default Preferences