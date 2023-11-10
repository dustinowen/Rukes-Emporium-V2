import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({ 
    categoriesMap: {},
 })

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log('cat map', categoryMap)
            setCategoriesMap(categoryMap)
            console.log('original categs map', categoriesMap)
        };

        getCategoriesMap();
    }, []);

    useEffect(() => {
        console.log('updated categs map', categoriesMap);
    }, [categoriesMap]);

    const value = { categoriesMap }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}