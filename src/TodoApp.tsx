import { useState } from 'react';

export const TodoApp = ({ initialState }) => {
    const [todos, setTodos] = useState(initialState);

    return (
        <div>
            <h2>Todo App</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};