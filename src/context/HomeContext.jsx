import { createContext, useEffect, useState } from "react"
export const HomeContext = createContext();
import axios from 'axios'

export const HomeContextProvider = ({ children }) => {
    const [breed, setBreed] = useState({})
    // console.log("breed", breed)
    // console.log("des", breed.message)
    // console.log("par", breed.australian)

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breeds/list/all`).then((res) => setBreed(res.data.message))
    }, [])
    return (
        <HomeContext.Provider value={{ breed }}>{children}</HomeContext.Provider>
    )
}