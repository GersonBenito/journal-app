
import { db, collection, addDoc } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../types/types";

// dispatch, es proporcionado por thunk, tiene la misma funcion que el useDispatch 
// getState, funciona para obtener los state(proporcionado por thunk), parecido a useSelector
export const startNewNote = () => async ( dispatch, getState ) =>{

    const { uid } = getState().auth;
    
    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime()
    }

    const doc = await addDoc( collection( db, `${ uid }/journal/notes` ), newNote );
    dispatch( activeNote( doc.id, newNote ) );

}

export const activeNote = ( uid, note ) =>({
    type: types.NOTE_ACTIVE,
    payload: {
        uid,
        ...note,
    }
})

export const startLoadingNotes = (uid) => async ( dispatch ) =>{

    const notes = await loadNotes(uid);
    dispatch( setNotes( notes ) );

}

export const setNotes = ( notes ) =>({

    type: types.NOTE_LOADING,
    payload: notes,

})