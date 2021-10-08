import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../redux/acciones/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector( state => state.notes );

    const handleSaveNote = () =>{

        dispatch( startSaveNote( active ) );

    }

    return (
        <div className="notes__appbar" >
            
            <span>{moment().format('DD MMMM YYYY')}</span>

            <div>
                <button className="btn">
                    <i className="fas fa-images fa-2x"></i>
                </button>

                <button 
                    className="btn"
                    onClick={ handleSaveNote }
                >
                    <i className="fas fa-save fa-2x"></i>
                </button>
            </div>

        </div>
    )
}
