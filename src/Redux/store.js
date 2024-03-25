import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetail : productDetailReducer,
    cart : cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []


const initialState = {
    cart : {
        cartItems : cartItemsFromLocalStorage
    }
}


const store = configureStore({
    reducer,
    initialState,
})

export default store