import React from 'react';
import { Notes } from '../notes/Notes';
// import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const Journal = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar />

            <main>
                {/* <NothingSelected /> */}
                <Notes />
            </main>

        </div>
    )
}
