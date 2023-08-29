import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmitSearch = (event) => {
        event.preventDefault()
        const category = inputValue.trim()
        if (category.length <= 1)
            return
        onNewCategory(category)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitSearch}>
            <input type="text" placeholder="Search gifs" value={inputValue} onChange={onInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
