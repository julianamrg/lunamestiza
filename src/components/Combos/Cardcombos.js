import React from "react";

export const Cardcombos = (info) => {
    return (
        <div key={info.id} className="product">
            {/* this is the new add */}
            <div className="product">
                <div className="product_img">
                    <img src={info.image} alt={info.title} />
                </div>

                <div className="product_footer">
                    <h1>{info.title}</h1>
                    <p>{info.category}</p>
                    <p className="price"> $ {info.price}</p>
                </div>
                <div className="buttom">
                    <button className="btn">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};
