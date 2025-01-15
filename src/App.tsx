import { useState } from 'react';
import './App.css';
import { TodoApp } from './TodoApp';

const initialState = [
  {
    id: "1", // uuid
    title: "Learn React",
    description: "Learn React from scratch",
    completed: false,
    priority: 1
  },
  {
    id: "2", // uuid
    title: "Learn TypeScript",
    description: "Learn TypeScript from scratch",
    completed: false,
    priority: 2
  },
  {
    id: "3", // uuid
    title: "Learn Tailwind",
    description: "Learn Tailwind from scratch",
    completed: false,
    priority: 3
  },

];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoApp initialState={initialState} />
    </div>
  );
}

export default App;
