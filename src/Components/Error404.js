import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <div>
            <h1>Error 404</h1>
            <p>La pagina que buscar ha sido reportado por los extraterrestes.</p>
            <Link to="/">Volver al Pasado</Link>
        </div>
    );
}

export default Error404;
