import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="jorunal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon mr-2"></i>
                    <span>Gerson Benito</span>
                </h3>

                <button className="btn">
                    Salir
                </button>
            </div>

            <div className="jornal__new-entry">
                <i className="far fa-calendar-plus fa-5x" ></i>
                <p className="mt-3">Nueva entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
