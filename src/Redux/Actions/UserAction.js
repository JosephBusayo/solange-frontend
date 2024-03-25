
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './../Constants/UserConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        };
        const response = await fetch(`${BASE_URL}/api/users/login`, requestOptions);
        const data = await response.json();
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem("userImfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message
        })
    }
}