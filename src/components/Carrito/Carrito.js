import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import whatsapp from "../../images/logo/whatsapp.png";
import { Whatsapp } from "../Whatsapp/Whatsapp";

export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false);
    };

    /* These 2 constants are to show and hide the cart section */
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    /* This constant is made to click the decrease buttom to remove products from the cart */
    const resta = (id) => {
        carrito.forEach((item) => {
            if (item.id === id) {
                item.cantidad === 1
                    ? (item.cantidad = 1)
                    : (item.cantidad -= 1);
            }
            setCarrito([...carrito]);
        });
    };

    /* This constant is made to click the increase buttom in order to add more products from the cart */
    const suma = (id) => {
        carrito.forEach((item) => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito]);
        });
    };

    /* This part is made to delete the products of the cart giving click con the trash icon */
    const removeProducts = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1);
                }
            });
            setCarrito([...carrito]);
        }
    };

    return (
        /* This is the cart interface */
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>TU PEDIDO</h2>

                <div className="carrito_center">
                    {carrito.map((products) => (
                        <div className="carrito_item" key={products.id}>
                            <img src={products.image.default} alt="" />
                            <div>
                                <h3> {products.title} </h3>
                                <p className="price">$ {products.price} </p>
                            </div>
                            <div>
                                <box-icon
                                    name="up-arrow"
                                    type="solid"
                                    onClick={() => suma(products.id)}
                                ></box-icon>{" "}
                                {/* It has the click function on the up arrow butom */}
                                <p className="cantidad">{products.cantidad}</p>
                                <box-icon
                                    name="down-arrow"
                                    type="solid"
                                    onClick={() => resta(products.id)}
                                ></box-icon>{" "}
                                {/* It has the click function on the down arrow butom */}
                            </div>
                            <div
                                className="remove_item"
                                onClick={() => removeProducts(products.id)}
                            >
                                {" "}
                                {/* It has the click function on the trash icon to delete products of the cart */}
                                <box-icon name="trash"></box-icon>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carrito_footer">
                    <h3> Subtotal sin envio: $ {total} </h3>
                    <button className="btn">
                        <a
                            href={`https://api.whatsapp.com/send?phone=573225122297&text= Hola, me gustaria pedir los siguientes productos: ${total}`}
                            class="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Haz tu pedido por {Whatsapp}
                            <img
                                src={whatsapp}
                                alt="Whatsapp"
                                className="Whatsapp"
                            />{" "}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
