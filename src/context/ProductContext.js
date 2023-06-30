import React, { useReducer } from 'react'
import { createContext } from "react";
import { useGetProductByLimitQuery } from '../services/productApi';

const initialState = {
    productData: [],

}

const reducer=(state,action)=>{}


export const AppContext = createContext()



const ProductContext = ({ children }) => {
    const { data = [], } = useGetProductByLimitQuery(100);
    const product = data.products


    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <AppContext.Provider value={{ ...state }}>
                {children}
            </AppContext.Provider>


        </>
    )
}

export default ProductContext

