import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './../Constants/CartConstants';
const BASE_URL = "https://solange.onrender.com";


/* export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const user = getState().user;

        if (user.isAuthenticated) {
            // If user is authenticated, use the backend API endpoint
            const response = await fetch(`${BASE_URL}/api/cart/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId, quantity: qty }),
            });

            const data = await response.json();

            dispatch({
                type: CART_ADD_ITEM,
                payload: data,
            });
        } else {
            // If user is unauthenticated, update local storage directly
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const existingItemIndex = cartItems.findIndex(item => item.product === productId);

            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].qty += qty;
            } else {
                cartItems.push({ product: productId, qty });
            }

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    } catch (error) {
        console.error('Error adding item to cart:', error.message);
    }
};

//REMOVE FROM CART
export const removeFromCart = (productId) => async (dispatch, getState) => {
    try {
        const user = getState().user;

        if (user.isAuthenticated) {
            // If user is authenticated, use the backend API endpoint
            await fetch(`${BASE_URL}/api/cart/${productId}`, {
                method: 'DELETE',
            });

            dispatch({
                type: CART_REMOVE_ITEM,
                payload: productId,
            });
        } else {
            // If user is unauthenticated, update local storage directly
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems = cartItems.filter(item => item.product !== productId);

            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            dispatch({
                type: CART_REMOVE_ITEM,
                payload: productId,
            });
        }
    } catch (error) {
        console.error('Error removing item from cart:', error.message);
    }
};
 */









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

//REMOVE FROM CART
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload : id,
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}