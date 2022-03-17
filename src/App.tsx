import React, { useState, useEffect } from 'react';

import Todos from './Todos';
import Todo from './Todo';
import { getTodos, addTodo, deleteTodo, updateTodo } from './API';

import TodoForm from './TodoForm';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos().then(data => setTodos(data));
    }, []);

    const addhandler = (todoText: any) => {
        addTodo(todoText).then(todo => {
            if (todo) setTodos(prevTodo => prevTodo.concat(todo));
        });
    };

    const updateHandler = (todo: Todo) => {
        updateTodo(todo).then(todo => {
            if (todo) {
                setTodos(ps => {
                    const updateTodos = ps.map((x: Todo) => {
                        if (x.id === todo.id) return todo;
                        return x;
                    }) as Todo[];

                    return updateTodos;
                });
            }
        });
    };

    const removeHandler = (todoId: string) => {
        deleteTodo(todoId).then(id => {
            if (id) setTodos(ps => ps.filter(x => x.id !== id));
        });
    };

    return (
        <div>
            <TodoForm onAddTodo={addhandler} />
            <Todos
                items={todos}
                title={todos}
                onRemoveTodo={removeHandler}
                onUpdateTodo={updateHandler}
            />
        </div>
    );
}

export default App;
