import axios from "axios";
import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADJUST_CART_QTY_FAIL, ADJUST_CART_QTY_REQUEST, ADJUST_CART_QTY_SUCCESS, REMOVE_FROM_CART_FAIL, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS } from "./cardType"


export const Add_to_cart_action = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type : ADD_TO_CART_REQUEST
        })

        console.log(id)

        // const {data} = await axios.get(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${id}`);
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${id}`);

        console.log(data)
        
        dispatch({
            type : ADD_TO_CART_SUCCESS,
            payload :{ ...data.product, qty : 1}
        });

        localStorage.setItem("cart", JSON.stringify(getState().cart.cart))

    } catch (error) {
        dispatch({
            type : ADD_TO_CART_FAIL,
            payload : error
        })
    }
}

// remove from cart

export const Remove_from_cart_action = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type : REMOVE_FROM_CART_REQUEST
        })

        // const {data} = await axios.get(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${id}`)
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${id}`)

        dispatch({
            type : REMOVE_FROM_CART_SUCCESS,
            payload : data.product
        })

        localStorage.setItem("cart", JSON.stringify(getState().cart.cart))

        
    } catch (error) {
        dispatch({
            type : REMOVE_FROM_CART_FAIL,
            payload : error
        })
    }
}

// cart qty adjust
export const Cart_qty_adjust = (id, adjust) => async (dispatch, getSatet) => {
    try {
        dispatch({
            type : ADJUST_CART_QTY_REQUEST
        })

        // const {data} = await axios.get(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${id}`)
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${id}`)

        dispatch({
            type : ADJUST_CART_QTY_SUCCESS,
            payload : {id : data.product._id, adjust : adjust}
        })

        localStorage.setItem("cart", JSON.stringify(getSatet().cart.cart))

    } catch (error) {
        dispatch({
            type : ADJUST_CART_QTY_FAIL,
            payload : error
        })
    }
} 