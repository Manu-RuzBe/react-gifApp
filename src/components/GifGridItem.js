import React from 'react'

export const GifGridItem = ( { title, url} ) => {

    return (
        <div className="col-sm-6 col-lg-4 mb-4 animate__animated animate__zoomIn">
            <div className='card'>
                <img src={ url } alt={ title } className="card-img-top" />
                <div className='card-body'>
                    <p className="card-title">{ title }</p>
                    <a href={ url } className="btn" target="_blank" rel="noreferrer">Ver GIF</a>
                </div>
            </div>
        </div>
    )
}
