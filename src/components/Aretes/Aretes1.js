import React from "react";
import aretes from "../../aretes";
import { Cardaretes } from "./Cardaretes";

const Aretes1 = () => {
    return (
        <div>
            <h1 className="produ"> ARETES </h1>
            {aretes.map((tar) => (
                <Cardaretes
                    id={tar.id}
                    title={tar.title}
                    price={tar.price}
                    image={tar.image}
                    cantidad={tar.cantidad}
                />
            ))}
        </div>
    );
};
export default Aretes1;
