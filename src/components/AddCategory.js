import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setCategories(categories => [inputValue, ...categories,]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="form-control" type="text" placeholder="Search something" value={inputValue} onChange={(e) => { handleInputChange(e) }} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}