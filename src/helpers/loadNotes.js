import { getDocs, collection, db } from '../firebase/firebase-config';

export const loadNotes = async (uid) =>{

    const notes = [];
    const noteSnap = await getDocs( collection( db, `${uid}/journal/notes` ) );

    if(!noteSnap.empty){

        noteSnap.forEach( note =>{
            notes.push({
                id: note.id,
                ...note.data()
            })
        })

    }

    return notes;

}