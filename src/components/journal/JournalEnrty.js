import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../redux/acciones/notes';

export const JournalEnrty = ({ id, date, title, body, url }) => {
    
    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = () =>{

        dispatch( activeNote(id, { 
            date, title, body, url
         }));

    }

    return (
        <div 
            className="journal__entry pointer"
            onClick={ handleEntryClick }
        >
            {
                url && 
                    <div
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: 'url(https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg)'
                        }}
                    >
                    </div>
            }
            <div className="journal__entry-body">
                <p className="joural__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    )
}
