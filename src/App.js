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
  { text: "comer", completed: true },
  
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  // const completedTodos =todos.reduce((ac, value) => !value.completed ? ac : ac+1, 0);
  const completedTodos =todos.filter( todo => todo.completed).length;
  const totalTodos= todos.length;

  return (
    <>
      <TodoCounter 
      completed={completedTodos}
      total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
