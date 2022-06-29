import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

function SignIn() {
    const {register, handleSubmit} = useForm();


    function inlogData(data) {
        console.log(data)
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Vul de velden hieronder in om in te kunnen loggen.</p>

            <form onSubmit={handleSubmit(inlogData)}>
                <label htmlFor="form-email">
                    Email:
                    <input
                        type="text"
                        id="form-email"
                        {...register("email")}
                        placeholder="email-adres"
                    />
                </label>
                <label htmlFor="form-wachtwoord">
                    Wachtwoord:
                    <input
                        type="password"
                        id="form-wachtwoord"
                        {...register("wachtwoord")}
                        placeholder="wachtwoord"
                    />
                </label>
                <button
                    type="submit"
                >Inloggen
                </button>
            </form>
            <p>Wachtwoord vergeten? Klik dan <Link to="/wachtwoord-herstel">hier!</Link></p>
            <p>Geen account? Dat kan ook. Wil je er toch een? Klik dan <Link to="/registratie">hier!</Link></p>
        </>
    )
}

export default SignIn