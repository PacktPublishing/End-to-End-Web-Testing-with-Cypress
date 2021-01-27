import React, { useState } from 'react';

const SubmitForm = (props) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term === '') return;
        props.onFormSubmit(term);
        setTerm('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Add Todo'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                data-testid="todo-input-element"
            />
            <button className='button' data-testid="add-todo-button">Add todo item</button>
        </form>
    );
}

export default SubmitForm;
