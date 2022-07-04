import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {login} = useContext(AuthContext)

    async function handleLogin(data) {
        console.log(data)
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                    username: data.username,
                    password: data.wachtwoord,
                }
            )
            console.log(result)
            login(result.data.accessToken)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Vul de velden hieronder in om in te kunnen loggen.</p>

            <form onSubmit={handleSubmit(handleLogin)}>
                <label htmlFor="form-email">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="form-username"
                        {...register("username")}
                        placeholder="gebruikersnaam"
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
            <p>Geen account? Dat kan ook. Wil je er toch een? Klik dan <Link to="/registratie">hier!</Link></p>
        </>
    )
}

export default SignIn