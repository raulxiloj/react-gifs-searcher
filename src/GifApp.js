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
            {
                categories.map((category,i) => {
                    return <span key={i} className="badge badge-dark mt-3 mr-2">{category}</span>
                })    
            }
            <hr className="separator" />

            {
                categories.map((category, i) =>
                    <GifCollection key={i} category={category} />
                )
            }

        </div >
    )
}

export default GifApp;
