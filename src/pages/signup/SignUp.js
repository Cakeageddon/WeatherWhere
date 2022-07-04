import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";

function SignUp() {
    const {register, handleSubmit} = useForm();
    const history = useHistory()

    async function registrationSubmit(data) {
        console.log(data)
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            )
            history.push('/login')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1>Registratie</h1>
            <form onSubmit={handleSubmit(registrationSubmit)}>
                <label htmlFor="form-email">
                    Email:
                    <input
                        type="text"
                        id="form-email"
                        {...register("email")}
                    />
                </label>
                <label htmlFor="form-wachtwoord">
                    Wachtwoord:
                    <input
                        type="text"

                        id="form-wachtwoord"
                        {...register("password")}
                    />
                </label>
                <label htmlFor="form-gebruikersnaam">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="form-gebruikersnaam"
                        {...register("username")}
                    />
                </label>
                <button
                    type="submit"
                >Registreren
                </button>
            </form>
        </>
    )
}

export default SignUp