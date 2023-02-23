import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/slice';


export const CounterApp = () => {

    const { counter } = useSelector( state => state.counter );
    const dispatch = useDispatch();

    return (
        <>
            <h1>El contador es { counter }</h1>
            <div>
                <button onClick={ () => dispatch( increment() ) }>Sumar</button>
                <button onClick={ () => dispatch( decrement() ) }>Restas</button>
                <button onClick={ () => dispatch( reset() ) }>Poner en 0</button>
            </div>
        </>
    )
}
