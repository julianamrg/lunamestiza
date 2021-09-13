import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
    const value = useContext(DataContext);
    const [products] = value.products;

    return (
        <>
            <h1 className="produ"> PRODUCTOS </h1>
            <div className="products">
                {products.map((products) => (
                    <ProductItem
                        key={products.id}
                        title={products.title}
                        image={products.image}
                        category={products.category}
                        price={products.price}
                        id={products.id}
                    />
                ))}
            </div>
        </>
    );
};
