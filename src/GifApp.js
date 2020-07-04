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
        <div className="container">
            <h1 id="title" className="mt-5">Giph App</h1>
            <AddCategory setCategories={setCategories} />
            <hr className="separator" />

            {
                categories.map(category =>
                    <GifCollection key={category} category={category} />
                )
            }

        </div >
    )
}

export default GifApp;
