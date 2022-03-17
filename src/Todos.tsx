import React from 'react';
import TodoItem from './TodoItem';
import Todo from './Todo';

const Todos: React.FC<{
    items: Todo[];
    title: Todo[];
    onRemoveTodo(id: string): void;
    onUpdateTodo(todo: Todo): void;
}> = props => {
    return (
        <div>
            {props.items.map(item => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    items={item.items}
                    title={item.title}
                    onRemoveTodo={props.onRemoveTodo}
                    onUpdateTodo={props.onUpdateTodo}
                />
            ))}
        </div>
    );
};

export default Todos;
