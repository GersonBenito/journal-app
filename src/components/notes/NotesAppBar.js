import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUpload } from '../../redux/acciones/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector( state => state.notes );

    const handleSaveNote = () =>{

        dispatch( startSaveNote( active ) );

    }

    const handlePitureClick = () =>{

        document.querySelector("#fileSelector").click();

    }
    
    const handleFileChange = (e) =>{
        
        const file = e.target.files[0];

        if( file ){

            dispatch( startUpload( file ) );

        }

    }

    return (
        <div className="notes__appbar" >
            
            <span>{moment().format('DD MMMM YYYY')}</span>

            <input 
                type="file" 
                name="file" 
                id="fileSelector" 
                onChange={ handleFileChange }
                style={{ display:'none' }}
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePitureClick }
                >
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
