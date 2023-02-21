import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetch";
//import PropTypes from 'prop-types';

export const GiftSearch = ({ valueSearsh }) => {

    const [searchValue, setSearchValue] = useState(valueSearsh);
    const { images } = useFetchGifs(searchValue);

    const onHandleValue = ({ target }) => {
        setSearchValue(target.value)
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log('submit');

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                onChange={onHandleValue}
                value={searchValue}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}


GiftSearch.defaultProps = {
    valueSearsh: 'Foo'
}
