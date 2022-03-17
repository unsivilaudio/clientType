import React, { useState } from 'react';
import './TodoForm.css';

interface AddTodo {
    title: string;
    items: string[];
}

type OnAddTodo = (todo: AddTodo) => void;

const TodoForm: React.FC<{
    onAddTodo: OnAddTodo;
}> = props => {
    const [title, setTitle] = useState('');
    const [items, setItems] = useState('');

    function handleSetTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    function handleSetItems(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        value = value.trim().replace(' ', ',');
        setItems(value);
    }

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
        const itemsArr = items.split(',');
        props.onAddTodo({ title, items: itemsArr });
        setTitle('');
        setItems('');
    };

    return (
        <form onSubmit={handleForm} className='form'>
            <label>Title</label>
            <input
                type='text'
                id='text'
                value={title}
                onChange={handleSetTitle}
                placeholder='Enter A Title'
            />
            <label>Items</label>

            <input
                type='text'
                id='text'
                value={items}
                onChange={handleSetItems}
                placeholder='Comma separated list of items...'
            />
            <button>Add Todo</button>
        </form>
    );
};

export default TodoForm;
