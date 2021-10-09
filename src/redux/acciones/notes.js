
import Swal from "sweetalert2";
import { db, doc, collection, addDoc, updateDoc, deleteDoc } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
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
    dispatch( addNewNote( doc.id, newNote ) );

}

export const activeNote = ( uid, note ) =>({
    type: types.NOTE_ACTIVE,
    payload: {
        uid,
        ...note,
    }
})

export const addNewNote = ( id, note ) =>({
    type: types.NOTE_ADD_NEW,
    payload: {
        id, ...note
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

export const startSaveNote = ( note ) => async ( dispatch, getState ) =>{

    try {
        
        const { uid } = getState().auth;
    
        if(!note.url){
            
            delete note.url;
    
        }
    
        const noteToFirestore = { ...note };
        delete noteToFirestore.uid;
        
        await updateDoc( doc( db, `${ uid }/journal/notes`, note.uid ), noteToFirestore );

        dispatch( refreshNote( note.uid, noteToFirestore ) );

        Swal.fire({
            icon:'success',
            title:note.title,
            text:'Se actualizo correctamente'
        })

    } catch (error) {
        
        Swal.fire({
            icon:'error',
            title:'Oops..',
            text:'Ocurrio un error actualizar la nota'
        })

    }


}

export const refreshNote = (id, note) =>({

    type: types.NOTE_UPDATE,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }

})

export const startUpload = ( file ) => async ( dispatch, getState ) =>{

    const { active } = getState().notes;

    Swal.fire({
        title: 'Subiendo...',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        didOpen: () =>{

            Swal.showLoading();

        }
        
    })
    
    const url = await fileUpload( file );
    active.url = url;
    
    dispatch( startSaveNote( active ) );

    Swal.close();

}

export const startDeleting = ( id ) => async ( dispatch, getState ) =>{

    const { uid } = getState().auth;

    try {

        await deleteDoc( doc( db, `${ uid }/journal/notes/${ id }` ) );

        dispatch( deleteNote( id ) );
        
        Swal.fire({
            icon:'success',
            title:'Nota Eliminado',
            text:'Nota eliminado correctamente'
        })

    } catch (error) {

        throw error
    }

}

export const deleteNote = ( id ) =>({

    type: types.NOTE_DELETE,
    payload: id

})

export const startCleanLogout = () => ({

    type: types.NOTE_LOGOUT_CLEANING

})