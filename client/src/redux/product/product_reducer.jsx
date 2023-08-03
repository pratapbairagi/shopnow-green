import { CLEAR_ERROR, CLEAR_SUCCESS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS } from "./product_type"


export const product_reducer = (state = {
    loading: false,
    success: false,
    product: {},
    products : [],
    productsFilter:[],
    error: null
},
    action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST,
        GET_ALL_PRODUCTS_REQUEST,
        DELETE_PRODUCT_REQUEST,
        EDIT_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            }
        case CREATE_PRODUCT_SUCCESS,
            EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload.product
            }
            // case EDIT_PRODUCT_SUCCESS :
            //     return{
            //         ...state,
            //         loading : false,
            //         success : true,
            //         product : 
            //     }
            case GET_ALL_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    success: true,
                    products: action.payload.products,
                    productsFilter : action.payload.productfilters
                }
                case DELETE_PRODUCT_SUCCESS :
                    return{
                        ...state,
                        loading: false,
                        success : true,
                        products : action.payload.products
                    }
                case GET_PRODUCT_DETAILS_SUCCESS :
                    return{
                        ...state,
                        loading : false,
                        success : true,
                        product : action.payload.product
                    }
        case CREATE_PRODUCT_FAIL,
        GET_ALL_PRODUCTS_FAIL,
        DELETE_PRODUCT_FAIL,
        EDIT_PRODUCT_FAIL,
        GET_PRODUCT_DETAILS_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_SUCCESS :
            return{
                ...state,
                success : false
            }
            case CLEAR_ERROR :
            return{
                ...state,
                error : null
            }
        default: return state
    }
}