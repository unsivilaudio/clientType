import React from 'react';
import Todo from './Todo';
import Multiple from './Multiple';
import './TodosItem.css';

const TodoItem: React.FC<{
    id: string;
    items: string[];
    title: string;
    onRemoveTodo(id: string): void;
    onUpdateTodo(todo: Todo): void;
}> = props => {
    function handleUpdateItems(vals: string[]) {
        const updatedTodo = { id: props.id, title: props.title, items: vals };
        props.onUpdateTodo(updatedTodo);
    }

    return (
        <div className='form'>
            <li onClick={() => props.onRemoveTodo(props.id)} className='item'>
                Title: {props.title}
            </li>
            <Multiple items={props.items} updateItems={handleUpdateItems} />

            <button onClick={() => props.onRemoveTodo(props.id)}>
                delete{' '}
            </button>
        </div>
    );
};

export default TodoItem;
