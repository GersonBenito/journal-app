import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../redux/acciones/auth';
import { startNewNote } from '../../redux/acciones/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name, photo } = useSelector( state => state.auth );

    const handleLogout = () =>{
        
        dispatch( startLogout() );

    }

    const handleStartNewNote = () =>{

        dispatch( startNewNote() );

    }

    return (
        <aside className="jorunal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="mr-2">
                        <img className="mr-2" src={ photo } alt={ name } />
                    </i>
                    <span>{ name }</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt fa-2x"></i>
                </button>
            </div>

            <div className="jornal__new-entry">
                <i 
                    className="far fa-calendar-plus fa-5x"
                    onClick={ handleStartNewNote } 
                ></i>
                <p className="mt-3">Nueva entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
