import { redirect } from "react-router-dom";
import { ADMIN_USER_UPDATE_FAILED, ADMIN_USER_UPDATE_REQUEST, ADMIN_USER_UPDATE_SUCCESS, CLEAR_ERROR, CLEAR_SUCCESS, GET_ALL_USERS_FAILED, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_SINGLE_USER_FAILED, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS, USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./userType";
import axios from "axios";

export const User_register_action = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        // const { data } = await axios.post("https://shopnow-server.vercel.app/website_ecommerce/app/api/register", user, config);
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/register`, user, config);

       
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        redirect("/")
        window.location.reload()


    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.response.data
        })
    }
};

// login user
export const User_login_action =  (user) => async (dispatch) => {

    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        });

        const config = {
            headers : {"Content-Type" : "application/json"},
            // headers: {
                "access-control-allow-origin" : "https://shopnow-server.vercel.app/",
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        // let {data} = await axios.post("https://shopnow-server.vercel.app/website_ecommerce/app/api/login", user, config);
        let {data} = await axios.post(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/login`, user, config);


        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        });

        redirect("/")
        window.location.reload()

    } catch (error) {
        dispatch({
            type : USER_LOGIN_FAILED,
            payload : error.response.data
        });
    }
};

// user logged
export const user_logged_check_action = () => async (dispatch) => {
    try {
        dispatch({
            type : USER_LOGGED_REQUEST
        });

        let config = {
            headers : { "Content-Type" : "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        // let {data} = await axios.get("https://shopnow-server.vercel.app/website_ecommerce/app/api/logged", config );
        let {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/logged`, config );

        dispatch({
            type : USER_LOGGED_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : USER_LOGGED_FAILED,
            payload : error.response.data
        })
    }
};

// user logout
export const user_logout_action = () => async (dispatch) => {
    try {
        dispatch({
            type : USER_LOGOUT_REQUEST
        });

        const config = {
            headers : { "Contentg-Type" : "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        // let {data} = await axios.get("https://shopnow-server.vercel.app/website_ecommerce/app/api/logout", config);
        let {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/logout`, config);
        
        dispatch({
            type : USER_LOGOUT_SUCCESS,
            payload : data
        });



    } catch (error) {
        dispatch({
            type : USER_LOGOUT_FAILED,
            payload : error.response.data
        })
    }
};

// user update
 export const user_update_action = (updatedUser) => async (dispatch) => {
    try {
        dispatch({
            type : USER_UPDATE_REQUEST
        });

        let config = {
            headers : { "Content-Type" : "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        // const { data } = await axios.put("https://shopnow-server.vercel.app/website_ecommerce/app/api/update", updatedUser, config);
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/update`, updatedUser, config);

        dispatch({
            type : USER_UPDATE_SUCCESS,
            payload : data
        });
        
        
    } catch (error) {
        dispatch({
            type : USER_UPDATE_FAILED,
            payload : error.response.data
        });
    }
 }

//  clear success'
export const user_clear_success_action = () => (dispatch) => {
    dispatch({
        type : CLEAR_SUCCESS
    })
}
// clear error

export const user_clear_error_action = () => (dispatch) => {
    dispatch({
        type : CLEAR_ERROR
    })
}

// Aadmin

// get all users
export const admin_gets_all_users_action = () => async (dispatch) => {
    try {
        dispatch({
            type : GET_ALL_USERS_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json"},
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        }
        // const {data} = await axios.get("https://shopnow-server.vercel.app/website_ecommerce/app/api/admin/users", config);
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/admin/users`, config);

        dispatch({
            type : GET_ALL_USERS_SUCCESS,
            payload : data
        });

    } catch (error) {
        dispatch({
            type : GET_ALL_USERS_FAILED,
            payload : error.response.data
        })
    }
}

// get single user
export const admin_get_single_user_action = (id) => async (dispatch) => {
    try {
        dispatch({
            type : GET_SINGLE_USER_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        }

        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/admin/user/${id}`, config);
        // const {data} = await axios.get(`http://localhost:5544/website_ecommerce/app/api/admin/user/${id}`, config);

        console.log("data of single user", data)

        dispatch({
            type : GET_SINGLE_USER_SUCCESS,
            payload : data
        });

    } catch (error) {
        console.log("error is sinngle user", error)
        dispatch({
            type : GET_SINGLE_USER_FAILED,
            payload : error.response.data
        })
    }
};

// admin user update 
export const admin_user_update_action = (id, user) => async (dispatch) => {
    try {
        dispatch({
            type : ADMIN_USER_UPDATE_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" },
            // headers: {
                "access-control-allow-origin" : `${process.env.REACT_APP_SERVER_URL}`,
            //     "Content-type": "application/json"
            //   }
            withCredentials : true
        };

        const {data} = await axios.put(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/admin/update/user/${id}`, user, config );
        // const {data} = await axios.put(`http://localhost:5544/website_ecommerce/app/api/admin/update/user/${id}`, user, config );

        dispatch({
            type : ADMIN_USER_UPDATE_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ADMIN_USER_UPDATE_FAILED,
            payload : error.response.data
        })
    }
}




// google auth
export const user_google_logged_check_action = () => async (dispatch) => {
    try {
        dispatch({
            type : USER_LOGGED_REQUEST
        });

        // let {data} = await axios.get("http://localhost:5544/auth/login/success", {withCredentials: true, headers:{"Content-Type":"application/json"}} );
        let {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/login/success`, {withCredentials: true, headers:{"Content-Type":"application/json"}} );

        dispatch({
            type : USER_LOGGED_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : USER_LOGGED_FAILED,
            payload : error.response.data
        })
    }
};
