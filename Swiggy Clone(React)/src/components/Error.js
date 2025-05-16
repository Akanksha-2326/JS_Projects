import React from "react";
import ReactDOM from "react-dom/client";
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>
                Ooops Error has been encountered
            </h1>
            <h3>
                Something went wrong!!!
                {err.status} : {err.statusText}
            </h3>
        </div>
    )
}

export default Error;