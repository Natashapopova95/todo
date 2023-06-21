import { React, useEffect, useState } from "react";
import { Input } from "./components/Input/Input";
import { List } from "./components/List/List";
import './App.css';

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(()=> {
    if (console.log(localStorage.getItem('todo') === undefined)) 
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);
 

 
  function clickAddTodo(objTodo) {
    const result = {
      todo: objTodo,
      active: true,
    };
    setTodos([...todos, result]);
  }

  function handleActiveTodo(todo) {
    console.log(todo);
    const updateTodo = todos.map(item => ({
      active: item.todo === todo ? !item.active : item.active,
      todo: item.todo
    }));

    setTodos(updateTodo);
  }

  const handleDeleteTodo = (todo) => {
    const result = todos.filter(item => (
      item.todo !== todo
    ))

    setTodos(result)
  }


  return (
  


    <div className="App">
      <Input clickAddTodo={clickAddTodo} /> 
      {todos.length > 0  &&  todos.map(item => (
        <List item={item} key={item.todo}
          handleActiveTodo={handleActiveTodo}
          handleDeleteTodo={handleDeleteTodo} />
      ))}
       
    </div>


  );
} 

export default App;
