import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) =>{

    switch (action.type) {

        case types.NOTE_ADD_NEW:
            return{
                ...state,
                notes: [ action.payload, ...state.notes ]
            }
       
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

        case types.NOTE_UPDATE:
            return{
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                            ? action.payload.note
                            : note
                )
            }

        case types.NOTE_DELETE:
            return{
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }

        case types.NOTE_LOGOUT_CLEANING:
            
            return{
                ...state,
                active: null,
                notes: [],
            }

        default:
            return state;
    }

}