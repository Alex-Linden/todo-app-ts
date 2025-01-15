import { useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { TodoInterface, TodoFormData } from './interfaces';
import {v4 as uuid} from 'uuid';

export const TodoApp = ({ initialState }: { initialState: TodoInterface[]; }) => {
    const [todos, setTodos] = useState<TodoInterface[]>(initialState);

    function addTodo(todoData: TodoFormData): void {
        setTodos([...todos,{id: uuid(), ...todoData, completed: false}]);
    }

    function removeTodo(todoId: string): void {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    function updateTodo( updatedTodo: TodoInterface): void {
        setTodos(todos => todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    return (
        <div>
            <h2>Todo App</h2>
            <TodoList todoList={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
            <TodoForm handleSave={addTodo} />
        </div>
    );
};