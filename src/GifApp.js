import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifApp = () => {

    let [categories, setCategories] = useState(["Suits", "Friends", "The bare bears"]);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Spiderman']);
    //    //setCategories(categories => [...categories, 'Spiderman']); 
    //};

    return (
        <>
            <h2>Giph App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifApp;
