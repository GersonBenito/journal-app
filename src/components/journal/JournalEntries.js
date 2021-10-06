import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEnrty } from './JournalEnrty';

export const JournalEntries = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <div className="journal__entries">
            
            {
                notes.map(note =>(
                    <JournalEnrty 
                        key={ note.id } 
                        { ...note }
                    />
                ))
            }

        </div>
    )
}
