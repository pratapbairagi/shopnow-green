import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { product_reducer } from "./product/product_reducer";
import { admin_gets_all_users_reducer, admin_get_user_reducer, user_register_reducer } from "./userReducer";
import { Cart_reducer } from "./cart/cartReducer";



const reducers = combineReducers({
    user_register : user_register_reducer,
    admin_gets_user : admin_get_user_reducer,
    admin_gets_users : admin_gets_all_users_reducer,
    product : product_reducer,
    cart : Cart_reducer
})

const initialState = {
    cart : {
        cart : localStorage.getItem("cart") ? 
        JSON.parse(localStorage.getItem("cart")) : []
    }
}

const middleware = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store