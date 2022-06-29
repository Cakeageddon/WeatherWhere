import React from "react";
import {useForm} from "react-hook-form";

function SignUp() {
    const {register, handleSubmit} = useForm();

    function registrationSubmit(data) {
        console.log(data)
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
                        {...register("wachtwoord")}
                    />
                </label>
                <label htmlFor="form-gebruikersnaam">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="form-gebruikersnaam"
                        {...register("gebruikersnaam")}
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