import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducers'
import { userLoginReducer } from './Reducers/UserReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfoo")) : null


const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}


const store = configureStore({
    reducer,
    initialState,
})

export default store