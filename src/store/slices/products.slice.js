import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }

    }
})

export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterHeadline = (query) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?query=${query}`)
        .then(res => dispatch(setProducts(res.data.categoryId)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?category=${id}`)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}



export default productsSlice.reducer;


