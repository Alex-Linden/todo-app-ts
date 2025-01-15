import React from 'react';
import Todo from './Todo';
import { TodoForm } from './TodoForm';
import { TodoInterface, TodoFormData } from './interfaces';

interface EditableTodoProps {
    todo: TodoInterface,
    updateTodo: (todoId: string, updatedData: TodoFormData) => void,
    removeTodo: (todoId: string) => void;
}

export const EditableTodo = ({ todo, updateTodo, removeTodo }: EditableTodoProps) => {
    const [isEditing, setIsEditing] = React.useState(false);

    function handleUpdate(updatedData: TodoFormData) {
        updateTodo({ ...updatedData, id: todo.id });
        setIsEditing(false);
    }


    return (
        <div className="EditableTodo">
            <div>
                {isEditing ? (
                    <TodoForm handleSave={handleUpdate} initialFormData={todo} />
                ) : (
                    <Todo key={todo.id} todo={todo} />
                )}
            </div>
            <div>
                <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit'}</button>
            </div>
            <div>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
        </div>
    );
};
