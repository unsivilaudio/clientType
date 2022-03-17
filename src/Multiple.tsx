import React, { useState, useEffect } from 'react';
import { addTodo, deleteTodo } from './API';
import Todo from './Todo';

type MultipleProps = {
    items: string[];
    updateItems(items: string[]): void;
};

const Multiple: React.FC<MultipleProps> = ({ items, updateItems }) => {
    const [multiItems, setMultiItems] = useState<string>('');

    useEffect(() => {
        setMultiItems(items.join(','));
    }, [items]);

    function handleUpdateItems() {
        updateItems(multiItems.split(','));
    }

    function handleClearItems() {
        updateItems([]);
    }

    function handleChangeItems(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        value = value.trim().replace(' ', ',');
        setMultiItems(value);
    }

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    name='items'
                    placeholder='Items'
                    value={multiItems}
                    onChange={handleChangeItems}
                />
                <button className='button1' onClick={handleUpdateItems}>
                    Update
                </button>
                <button className='button1' onClick={handleClearItems}>
                    Clear
                </button>
            </form>
        </>
    );
};

export default Multiple;
