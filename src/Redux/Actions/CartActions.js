import { CART_ADD_ITEM } from './../Constants/CartConstants';

const BASE_URL = "https://solange.onrender.com";


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to get product');
    }
    const data = await response.json();

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}