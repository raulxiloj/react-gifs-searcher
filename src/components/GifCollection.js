import React, { useState, useEffect } from 'react'
import { GifItem } from './GifItem';

export const GifCollection = ({ category }) => {

    const [images, setimages] = useState([])

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=suits&limit=10&api_key=EF8bPum3fkHFrIAyA0KIXagjYLtY03f7';
        const res = await fetch(url);
        const { data } = await res.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setimages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => <GifItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}
