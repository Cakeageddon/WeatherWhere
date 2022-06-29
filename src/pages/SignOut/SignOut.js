import React from "react";
import {useHistory} from "react-router-dom";

function SignOut() {

    const history = useHistory()

    return (
        <>
            <h2>U bent uitgelogd.</h2>
            <p>Een prettige dag en tot de volgende keer!</p>
            <p>Foutje?</p>
            <button
                type="button"
                onClick={() => history.push("/signin")}
            >
                Log In
            </button>
            <p>Of</p>
            <button
                type="button"
                onClick={() => history.push("/")}
            >
                Home
            </button>
        </>
    )
}

export default SignOut
