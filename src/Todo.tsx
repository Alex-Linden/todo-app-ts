import React from 'react'
import { TodoInterface } from './interfaces'

const Todo = ({todo}: {todo: TodoInterface}) => {
  return (
    <div className="Todo">
        <div><b>{todo.title}</b> <small>(priority: {todo.priority})</small></div>
        <div><small>{todo.description}</small></div>
      </div>
  )
}

export default Todo