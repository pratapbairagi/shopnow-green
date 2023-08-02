import axios from "axios";
import { CLEAR_ERROR, CLEAR_SUCCESS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS } from "./product_type"
import { redirect } from "react-router-dom";


export const create_product_action = (product) => async (dispatch) => {
    try {
        dispatch({
            type : CREATE_PRODUCT_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" },
            withCredentials : true
        };

        // const {data} = await axios.post("https://shopnow-server.vercel.app/website_ecommerce/app/api/product/add", product, config);
        const {data} = await axios.post(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/add`, product, config );

        dispatch({
            type : CREATE_PRODUCT_SUCCESS,
            payload : data
        })
        
        // redirect(`/product/created/${data.product._id}`)
        window.location.href=`/product/created/${data.product._id}`
        // localStorage.setItem("product_create_success", JSON.stringify(data.product))
        
    } catch (error) {
        dispatch({
            type : CREATE_PRODUCT_FAIL,
            payload : error.response.data
        })
    }
};

// delete product 
export const delete_product_action = (id) => async (dispatch) => {
    try {
        dispatch({
            type : DELETE_PRODUCT_REQUEST
        });
        const config = {
            headers : { "Content-Type" : "application/json"},
            withCredentials : true
        }
        // const {data} = await axios.delete(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${id}`, config);
        const {data} = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${id}`, config );

        dispatch({
            type : DELETE_PRODUCT_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : DELETE_PRODUCT_FAIL,
            payload : error.response.data
        })
    }
}

// get all products
// export const get_all_products_action = (keyword = "", category = "", price = {from : 0, to : 999999}) => async (dispatch) => {
export const get_all_products_action = (title="", category="",price={from:0, to:999999}, brand="", color="", size="", gender="") => async (dispatch) => {
    console.log(gender)

    try {
        dispatch({
            type : GET_ALL_PRODUCTS_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json"},
            withCredentials : true
        }

        // const {data} = await axios.get(`https://shopnow-server.vercel.app/website_ecommerce/app/api/products?title=${title}&category=${category}&price[gte]=${price.from}&price[lte]=${price.to}&brand=${brand}&color=${color}&size=${size}`, config);
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/products?title=${title}&category=${category}&price[gte]=${price.from}&price[lte]=${price.to}&brand=${brand}&color=${color}&size=${size}&gender=${gender}`, config );

        dispatch({
            type : GET_ALL_PRODUCTS_SUCCESS,
            payload : data

        });

    } catch (error) {
        console.log(error)
        dispatch({
            type : GET_ALL_PRODUCTS_FAIL,
            payload : error.response.data
        })
    }
};

// edit product
export const edit_product_action = (product) => async (dispatch) => {
    try {
        dispatch({
            type : EDIT_PRODUCT_REQUEST
        });

        // const {data} = await axios.put(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${product.id}`, product);
        const {data} = await axios.put(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${product.id}`, product );

        dispatch({
            type : EDIT_PRODUCT_SUCCESS,
            payload : data
        });

    } catch (error) {
        dispatch({
            type : EDIT_PRODUCT_FAIL,
            payload : error.response.data
        })
    }
}

export const get_product_details = (id) => async (dispatch) =>{
    try {
        dispatch({
            type : GET_PRODUCT_DETAILS_REQUEST
        });

        // const {data} = await axios.get(`https://shopnow-server.vercel.app/website_ecommerce/app/api/product/${id}`);
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/product/${id}`);

        dispatch({
            type : GET_PRODUCT_DETAILS_SUCCESS,
            payload : data
        });

    } catch (error) {
        dispatch({
            type : GET_PRODUCT_DETAILS_FAIL,
            payload : error.response.data
        })
    }
};

export const clear_success = () =>  (dispatch) => {
    dispatch({
        type : CLEAR_SUCCESS
    })
};

export const clear_error = () =>  (dispatch) => {
    dispatch({
        type : CLEAR_ERROR
    })
}