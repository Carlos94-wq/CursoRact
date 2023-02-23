import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counters/counterSlice';

export const App = () => {

  const { counter } = useSelector( state => state.Counter );
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={ () => dispatch(increment())} >Incrementar</button>
      <button onClick={ () => dispatch(incrementBy(2))} >Incrementear de 2 en 2</button>
      <button onClick={ () => dispatch(decrement())} >Restar</button>
      { counter }
    </div>
  )
}
