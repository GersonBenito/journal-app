import { types } from "../types/types"

// const initialState = {}

export const authReducer = (state = {}, action) =>{

    switch(action.type){

        case types.LOGIN:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                photo: action.payload.photo,
            }

        case types.LOGOUT:
            return {}
        
        default:
            return state;

    }

}