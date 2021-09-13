import React from "react";
import Banner from "../../images/Banner/banner1.jpeg";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="">
                <h1 className="title">Inicio </h1>
            </Link>
            <img src={Banner} alt="" />

            <p>
                {" "}
                “Expresión artística como elemento facilitador del
                autoconocimiento”{" "}
            </p>
            <p className="footer"> Todos los derechos reservados © </p>
        </div>
    );
};
