import axios from "axios";
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";
const BASE_URL = "https://solange.onrender.com";


//ALL PRODUCTs
export const listProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const response = await fetch(`${BASE_URL}/api/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json(); 
        /* const {data} = await axios.get(`${BASE_URL}/api/products`)   */   
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message
        })
    }
}

//SINGLE PRODUCT
export const listProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const response = await fetch(`${BASE_URL}/api/products/${id}`);
        if (!response.ok) {
            throw new Error('Failed to get product');
        }
        const data = await response.json(); 
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message
        })
    }
}