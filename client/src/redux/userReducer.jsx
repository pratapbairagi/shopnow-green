import { ADMIN_USER_UPDATE_FAILED, ADMIN_USER_UPDATE_REQUEST, ADMIN_USER_UPDATE_SUCCESS, CLEAR_ERROR, CLEAR_SUCCESS, GET_ALL_USERS_FAILED, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_SINGLE_USER_FAILED, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS, USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./userType";


export const user_register_reducer = (
    state = {
        loading: false,
        success: false,
        user: {},
        error: null,
        auth: false
    },
    action
) => {
    // console.log(action.payload?.message)

    switch (action.type) {
        case USER_REGISTER_REQUEST,
            USER_LOGIN_REQUEST,
            USER_LOGGED_REQUEST,
            USER_LOGOUT_REQUEST:
            return {

                ...state,
                loading: true
            };
        case USER_REGISTER_SUCCESS,
            USER_LOGIN_SUCCESS,
            USER_LOGGED_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                success: true,
                auth: true
            };
        case USER_REGISTER_FAILED,
            USER_LOGIN_FAILED,
            USER_LOGGED_FAILED,
            USER_LOGOUT_FAILED:
            return {
                
                ...state,
                loading: false,
                error: action.payload.message
            };

        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                auth: false
            }
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                user: action.payload
            }
        case USER_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload.message
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default: return state

    }
}

// admin
// get single user
export const admin_get_user_reducer = (
    state = {
        loading: false,
        success: false,
        user: {},
        error: null

    }, action) => {

    switch (action.type) {
        case GET_SINGLE_USER_REQUEST,
        ADMIN_USER_UPDATE_REQUEST :
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_USER_SUCCESS, 
        ADMIN_USER_UPDATE_SUCCESS :
            return {
                ...state,
                loading: false,
                success: true,
                user: action.payload.user
            }
        case GET_SINGLE_USER_FAILED,
        ADMIN_USER_UPDATE_FAILED :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default: return state
    }
}

// get all users
export const admin_gets_all_users_reducer = (
    state = {
        loading: false,
        success: false,
        users: [],
        error: null
    }, action) => {

    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload.users
            }
        case GET_ALL_USERS_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        // case CLEAR_SUCCESS :
        //     return {
        //         ...state,
        //         success : false
        //     }
        // case CLEAR_ERROR :
        //     return {
        //         ...state,
        //         error : null
        //     }
        default : return state

    }
}