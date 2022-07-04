import React from "react";
import {Link} from "react-router-dom";

function Profile() {
    return (
        <>
            <h1>Profiel</h1>
            <p>Hier gebeurt de magie.</p>
            <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>¶
        </>
    )
}

export default Profile