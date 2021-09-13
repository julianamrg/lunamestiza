import React from "react";
import combos from "../../combos";
import { Cardcombos } from "./Cardcombos";

export const Combos1 = () => {
    return (
        <div>
            <h1 className="produ"> COMBOS</h1>
            {combos.map((el) => (
                <Cardcombos
                    id={el.id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    cantidad={el.cantidad}
                />
            ))}
        </div>
    );
};
