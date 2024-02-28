import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { adminOrderReducer } from "./Admin/Order/Reducer";
import { ratingsReducer } from "./Rating/Reducer";
import { reviewsReducer } from "./Review/Reducer";
import { addressReducer } from "./Address/Reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer,
    rating:ratingsReducer,
    review:reviewsReducer,
    address:addressReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))