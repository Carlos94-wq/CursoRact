import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { App } from "./App";
import PokemonApp from "./pokemon/PokemonApp";
import { AppStore } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={ AppStore }>
            <PokemonApp />
        </Provider>
    </React.StrictMode>
)