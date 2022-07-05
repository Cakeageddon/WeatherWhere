import React from "react";

function Preferences() {

    return (
        <>
            <h3>Stad 1</h3>
            <fieldset>
                <legend>Jouw voorkeuren</legend>
                <label htmlFor="height" className="margin">Temperatuur:</label>
                <span>Koud<input type="range" id="height" name="height" min="0" max="100"/>Warm</span><br/>
                <label htmlFor="height" className="margin">Bewolking:</label>
                <span>Geen<input type="range" id="height" name="height" min="0" max="100"/>Veel</span><br/>
                <label htmlFor="salary" className="margin">Wind:</label>
                <span>Geen<input type="range" id="salary" name="salary" min="0" max="100"/>Veel</span>
            </fieldset>
        </>
    )
}

export default Preferences