import { types } from "../types/types";

const initialState = {
    loading: false,
    error: null,
}

export const errorReducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case types.SET_ERROR:
            
            return{
                ...state,
                error: action.payload,
            };

        case types.UNSET_ERROR:
            return {
                ...state,
                error: null,
            };

        case types.START_LOADIN:
            return{
                ...state,
                loading: true,
            };

        case types.FINISH_LOADING:
            return{
                ...state,
                loading: false,
            };
    
        default:
            return state;
    }
}