import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifCollection } from './components/GifCollection';

const GifApp = () => {

    let [categories, setCategories] = useState(["Bob esponja"]);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Spiderman']);
    //    //setCategories(categories => [...categories, 'Spiderman']); 
    //};

    return (
        <>
            <h1 id="title">Giph App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifCollection key={category} category={category} />
                    )
                }
            </ol>
        </>
    )
}

export default GifApp;
