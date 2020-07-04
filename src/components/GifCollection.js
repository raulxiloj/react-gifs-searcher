import React from 'react'
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifCollection = ({ category }) => {//Gif grid

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="row justify-content-center h-100">
                {
                    images.map(img => <GifItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}

GifCollection.propTypes = {
    category: PropTypes.string.isRequired
}