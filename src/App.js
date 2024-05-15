import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import logo from "./platzi.webp";


const defaultTodos = [
  { text: "corta cebolla", completed: true },
  { text: "tomar un curso", completed: false },
  { text: "Lloorar", completed: false },
  { text: "dar un saludo", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
