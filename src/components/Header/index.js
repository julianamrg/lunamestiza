import React, { useContext } from "react";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const toogleMenu = () => {
        setMenu(!menu);
    };

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="logo" width="120px" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/Products">Productos</Link>
                </li>
                <li>
                    <Link to="/Combos">Combos</Link>
                </li>
                <li>
                    <Link to="/Aretes">Aretes</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length} </span>
            </div>
        </header>
    );
};
export default Header;
