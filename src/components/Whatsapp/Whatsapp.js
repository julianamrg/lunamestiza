import React from "react";
import whatsapp from "../../images/logo/whatsapp.png";

export const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/+573225122297"
            class="btn"
            target="_blank"
            rel="noopener noreferrer"
        >
            Agrega tus productos al carrito y haz tu pedido por Whatsapp{" "}
            <img
                src={whatsapp}
                alt="Whatsapp"
                className="Whatsapp"
                height="100px"
                width="100px"
            />
        </a>
    );
};
