import React from "react";

function Preferences() {

    return (
        <>
            <h3>Stad 1</h3>
            <fieldset>
                <legend>Geef hier jouw voorkeuren aan</legend>
                <label htmlFor="temperature" className="margin">Temperatuur:</label>
                <span>Koud<input type="range" id="height" name="temperature" min="0" max="100"/>Warm</span><br/>
                <label htmlFor="cloudiness" className="margin">Bewolking:</label>
                <span>Geen<input type="range" id="cloudiness" name="cloudiness" min="0" max="100"/>Veel</span><br/>
                <label htmlFor="windspeed" className="margin">Windkracht:</label>
                <span>Geen<input type="range" id="windspeed" name="windspeed" min="0" max="100"/>Veel</span>
            </fieldset>


        </>
    )
}

export default Preferences