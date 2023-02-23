import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemon/index';

export default function PokemonApp() {

  const { pokemons } = useSelector( ( store ) => store.Pokemon );
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getPokemons() );

  }, [])
  

  return (
    <>
      <h1>Pokemon App</h1>
      <ul>
        {
          pokemons.map( (items) =>(
            <li>{items.name}</li>
          ))
        }
      </ul>

      <button>Next</button>
    </>
  )
}
