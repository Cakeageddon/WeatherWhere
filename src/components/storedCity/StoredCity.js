import React, {useEffect, useState} from "react";

function StoredCity({cityName}) {

    return (
        <article className="city">
            <h2>{cityName}</h2>
        </article>
    )
}

export default StoredCity
