import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../redux/acciones/notes';
import { NotesAppBar } from './NotesAppBar'

export const Notes = () => {

    const { active } = useSelector( state => state.notes );
    const [ values, handleInputChangle, reset ] = useForm( active );
    const { title, body } = values;

    const dispatch = useDispatch();
    const activeNoteId = useRef( active.uid );

    useEffect(()=>{

        if( active.uid !== activeNoteId.current ){
            reset( active );
            activeNoteId.current = active.uid;
        }

    },[ active, reset ])

    useEffect(() =>{

        dispatch( activeNote( values.uid, { ...values } ) );

    },[ values, dispatch ])

    const handleDelete = () =>{

        dispatch( startDeleting( active.uid ) );

    }

    return (
        <div className="notes__main-content animate__animated animate__fadeIn" >
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text" 
                    placeholder="Titulo"
                    className="notes__title-input"
                    value={ title }
                    onChange={ handleInputChangle }
                    name="title"
                />

                <textarea 
                    placeholder="Descripcion"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChangle }
                    name="body"
                ></textarea>

                {
                    (active.url) 
                        && (

                            <div className="notes__image">
                                <img 
                                    src={ active.url }
                                    alt="imagen" 
                                />
                            </div>
                        )
                }

            </div>

            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                <i className="fas fa-trash fa-2x"></i>
            </button>

        </div>
    )
}
