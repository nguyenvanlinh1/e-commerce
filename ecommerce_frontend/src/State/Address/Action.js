import { api } from "../../Config/apiConfig"
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS } from "./ActionType"


export const createAddress = (address) => async (dispatch) =>{
    dispatch({type: CREATE_ADDRESS_REQUEST})
    try{
        const {data} = await api.post(`/api/address/`, address)

        dispatch({type: CREATE_ADDRESS_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: CREATE_ADDRESS_FAILURE, payload:error.message})
    }
}