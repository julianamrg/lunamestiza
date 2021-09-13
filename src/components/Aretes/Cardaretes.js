import React from "react";

export const Cardaretes = (tarjeta) => {
    return (
        <div key={tarjeta.id} className="product">
            <div className="product">
                <div className="product_img">
                    <img src={tarjeta.image} alt={tarjeta.title} />
                </div>
                <div className="product_footer">
                    <h1>{tarjeta.title}</h1>
                    <p>{tarjeta.category}</p>
                    <p className="price"> $ {tarjeta.price}</p>
                </div>
                <div className="buttom">
                    <button className="btn">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};
