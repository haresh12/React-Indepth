import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () =>{
   const errorData = useRouteError();
     return(
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{errorData.data}</h3>
        </div>
    )
}

export default Error;