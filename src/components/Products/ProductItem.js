import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

/* This is the card of the products */
export const ProductItem = ({ title, image, category, price, id }) => {
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    return (
        <div key={id} className="product">
            <Link to={`/product/${id}`}>
                <div className="product_img">
                    <img src={image.default} alt={title} />
                </div>
            </Link>
            <div className="product_footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price} </p>
            </div>
            <div className="buttom">
                <button onClick={() => addCarrito(id)} className="btn">
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};
