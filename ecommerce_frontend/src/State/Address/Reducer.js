import { CREATE_ORDER_SUCCESS } from "../Order/ActionType";
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST } from "./ActionType"

const initialState = {
    address:[],
    loading: false,
    error: null
}

export const addressReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ADDRESS_REQUEST:
            return {...state, loading: true, error: null};
        case CREATE_ORDER_SUCCESS:
            return {...state, loading: false, address:action.payload, error:null}
        case CREATE_ADDRESS_FAILURE:
            return {...state, loading: false, error:action.payload}
        default:
            return {...state}
    }
}