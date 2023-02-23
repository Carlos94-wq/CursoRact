import { pokemonApi } from "../../../api/Pokemon.Api";
import { setPokemons, startGetPokemons } from "./index";

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, /* getState */ ) => {

        dispatch( startGetPokemons() );

        const resp = await pokemonApi.get('?limit=10&offset=10');
        console.log(resp.data);

        dispatch( setPokemons({
            pokemons: resp.data.results
        }) );
    }
}

