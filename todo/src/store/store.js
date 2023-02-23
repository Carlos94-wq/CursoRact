import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counters/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const AppStore = configureStore({
    reducer: {
        Counter: counterSlice.reducer,
        Pokemon: pokemonSlice.reducer
    }
});