import { createContext, useEffect, useState } from "react";
import countryData from "./CountryData";
import { v4 as uuidv4 } from 'uuid';

export const CountryContext = createContext()

const CountryContextProvider = (props) => {
    const [listCountries, setListCountries] = useState(countryData)

    useEffect(() => {
        JSON.parse(localStorage.getItem("listCountries"))
    }, [])

    useEffect(() => {
        localStorage.setItem("listCountries", JSON.stringify(listCountries))
    })

    const sortedCountry = listCountries.sort((a,b)=>(a.id < b.id ? -1 : 1));

    const addCountry = ( name, code, description) => {
        setListCountries([...listCountries, {id:uuidv4(), name, code, description}])
    }
    const deleteCountry = (id) => {
        setListCountries(listCountries.filter(listCountry => listCountry.id !== id))
    }
    const updateCountry = (id, updatedCountry) => {
        setListCountries(listCountries.map((listCountry => listCountry.id === id ? updatedCountry : listCountry)))
    }


    return (
        <CountryContext.Provider value={{sortedCountry, addCountry, deleteCountry, updateCountry }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider