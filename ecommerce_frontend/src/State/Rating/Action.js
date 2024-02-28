import { api } from "../../Config/apiConfig"
import { CREATE_RATING_FAILURE, CREATE_RATING_REQUEST, CREATE_RATING_SUCCESS, GET_RATING_FAILURE, GET_RATING_REQUEST, GET_RATING_SUCCESS } from "./ActionType"

export const getRatingByProduct = (productId) => async (dispatch) => {
    dispatch({type: GET_RATING_REQUEST})
    try{
        const {data} = await api.get(`/api/ratings/product/${productId}`)
        console.log("Rating:", data)
        dispatch({type: GET_RATING_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: GET_RATING_FAILURE, payload:error.message})
    }
}


export const createRatingByProduct = (rating) => async (dispatch) => {
    dispatch({type: CREATE_RATING_REQUEST})
    try{
        const {data} = await api.post(`/api/ratings/create`, rating.address)
        console.log("Create rating: ", data)
        dispatch({type: CREATE_RATING_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: CREATE_RATING_FAILURE, payload:error.message})
    }
}