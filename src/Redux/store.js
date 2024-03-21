import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './Reducers/ProductReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetail : productDetailReducer
})
const initialState = {}


const store = configureStore({
    reducer,
    initialState,
})

export default store