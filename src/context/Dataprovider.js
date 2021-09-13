import React, { useState, useEffect, createContext } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const product = Data.items;
        if (product) {
            setProducts(product);
        } else {
            setProducts([]);
        }
    }, []);

    const addCarrito = (id) => {
        const check = carrito.every((item) => {
            return item.id !== id;
        });
        if (check) {
            const data = products.filter((products) => {
                return products.id === id;
            });
            setCarrito([...carrito, ...data]);
        } else {
            alert("El producto se ha añadido al carrito ");
        }
    };

    /* In this part, localStorage is used to storage the products in the web and it does not matter if we change the interface, the products are stored */
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("dataCarrito", JSON.stringify(carrito));
    }, [carrito]);

    /* This is the part where it can get the total price of the products without shipping price */
    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + item.price * item.cantidad;
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [carrito]);

    const value = {
        products: [products],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
    };
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
