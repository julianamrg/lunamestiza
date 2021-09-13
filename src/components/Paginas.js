import React from "react";
import { Switch, Route } from "react-router-dom";
import { Combos1 } from "./Combos/Combos1";
import Aretes1 from "./Aretes/Aretes1";
import { Inicio } from "./Inicio";
import { ProductsList } from "./Products/index";
import { Whatsapp } from "../components/Whatsapp/Whatsapp";

export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />

                <Route path="/products">
                    <ProductsList />
                    <Whatsapp />
                </Route>
                <Route path="/combos">
                    <Combos1 />
                    <Whatsapp />
                    {/* In this part, We call the elements to show in the website for example <ProductsList /> in Combos and Aretes */}
                </Route>
                <Route path="/aretes">
                    <Aretes1 />
                    <Whatsapp /> {/* <Aretes /> */}
                </Route>
            </Switch>
        </section>
    );
};
