import React, { useState } from 'react';
import { TodoFormData } from './interfaces';

interface TodoFormProps {
    initialFormData?: TodoFormData;
    handleSave: (todoData: TodoFormData) => void;
}

const defaultInitialState = {
    title: '',
    description: '',
    priority: 1
};

export const TodoForm = ({ initialFormData=defaultInitialState, handleSave }: TodoFormProps) => {
    const [todoData, setTodoData] = useState<TodoFormData>(initialFormData);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSave(todoData);
        setTodoData(initialFormData);
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <form>
                <input type="text" placeholder="Title" name="title" value={todoData.title} onChange={(e) => setTodoData({ ...todoData, title: e.target.value })} />
                <textarea placeholder="Description" name="description" value={todoData.description} onChange={(e) => setTodoData({ ...todoData, description: e.target.value })} />
                <select name="priority" value={todoData.priority} onChange={(e) => setTodoData({ ...todoData, priority: parseInt(e.target.value) })}>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
};
