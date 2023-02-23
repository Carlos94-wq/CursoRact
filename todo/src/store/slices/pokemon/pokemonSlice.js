import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    pokemons:[],
    page:0
}

export const pokemonSlice = createSlice({
    name: '[APP_pokemon]',
    initialState,
    reducers: {
        startGetPokemons:(state)=>{
            state.loading = true;
        },
        setPokemons:( state, actions )=>{
            state.loading = false;
            state.page = actions.payload.page;
            state.pokemons = actions.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startGetPokemons, setPokemons } = pokemonSlice.actions;