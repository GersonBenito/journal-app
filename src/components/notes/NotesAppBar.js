import React from 'react';
import moment from 'moment';

export const NotesAppBar = () => {

    return (
        <div className="notes__appbar" >
            
            <span>{moment().format('DD MMMM YYYY')}</span>

            <div>
                <button className="btn">
                    <i className="fas fa-images fa-2x"></i>
                </button>

                <button className="btn">
                    <i className="fas fa-save fa-2x"></i>
                </button>
            </div>

        </div>
    )
}
