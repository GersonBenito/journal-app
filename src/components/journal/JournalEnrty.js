import React from 'react'

export const JournalEnrty = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="joural__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, harum. Adipisci dolorem, amet necessitatibus quos voluptatem debitis totam eaque veritatis laborum sit doloremque commodi reprehenderit. Neque asperiores dolore reprehenderit ad.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
