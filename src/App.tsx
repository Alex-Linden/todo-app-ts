import { useState } from 'react';
import './App.css';
import { TodoApp } from './TodoApp';

let initialState = [
  'Learn React',
  'Build a Todo App',
  'Profit!'
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
