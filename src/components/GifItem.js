import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {

    return (
        <div className="col-md-3 mb-4 align-items-stretch animate__animated animate__fadeIn">
            <div className="card" >

                <img className="card-img-top" src={url} alt={title} />

                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>

            </div>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}