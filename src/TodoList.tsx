import React, { useState } from 'react';
import{ EditableTodo} from './EditableTodo';
import { TodoInterface, TodoFormData } from './interfaces';
// import { EditableTodo } from './EditableTodo';

interface TodoListProps {
    todoList: TodoInterface[];
    updateTodo: (todoId: string, updatedData: TodoFormData) => void;
    removeTodo: (todoId: string) => void;
}

export const TodoList = ({ todoList, updateTodo, removeTodo }: TodoListProps) => {
    // const [todos, setTodos] = useState<TodoInterface[]>(todoList);
    // console.log(todos);

    if (todoList.length === 0) {
        return <div>No todos</div>;
    }

    return (
        <div>
            <div>TodoList</div>
            <ul>
                {todoList.map((todo, index) => (
                    <EditableTodo key={index} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    );
};
