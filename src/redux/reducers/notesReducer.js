import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) =>{

    switch (action.type) {
       
        case types.NOTE_ACTIVE:
            return {
                ...state,
                active: {
                    ...action.payload,
                }
            }
        
        case types.NOTE_LOADING:
            return{
                ...state,
                notes: [ ...action.payload ]
            }
        default:
            return state;
    }

}