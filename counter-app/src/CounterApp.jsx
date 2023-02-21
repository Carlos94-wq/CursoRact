import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    const handleCouter = (event, val) => {  
        setCounter( ( c ) => c + 1 )
    }

    const handleSubstrack = (event, val) => {  
        setCounter( ( c ) => c - val );

    }

    const handleReset =() =>{
        setCounter(value)
    }

    return (
        <>
            <h1>Counter: { counter } </h1>
            <button onClick={ (event) => handleCouter(event, 1) }>Sumar</button>
            <button onClick={ (event) => handleSubstrack(event, 1) }>Restar</button>
            <button onClick={ () => handleReset() }>Poner en 0</button>
        </>
    )
}

CounterApp.defaultProps = {
    value: 0
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}