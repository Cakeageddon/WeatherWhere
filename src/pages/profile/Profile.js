import React from "react";
import {Link} from "react-router-dom";

import Preferences from "../../components/preferences/Preferences";

function Profile() {

    return (
        <>
            <h1>Profiel</h1>
            <Preferences/>
            <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>
        </>
    )
}

export default Profile