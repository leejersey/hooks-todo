import React, { memo, useCallback, useState, useEffect } from "react";
import Addtodo from './Addtodo';
import Todos from './Todos';

const Todolist= memo(function Todolist() {
    const [todos, setTodos ] = useState([]);
    const addTodo = useCallback((todo) => {
        setTodos(todos => [...todos,todo]);
    },[])

    const removeTodo = useCallback((id) => {
        setTodos(todos => todos.filter(todo => {
            return todo.id !== id;
        }))
    },[])

    const toggleTodo = useCallback((id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id ? 
            { 
                ...todo, 
                complete: !todo.complete
            }:
            {...todo}
        }))
     },[])

     useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(todos);
    },[])

    useEffect(()=> {
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
  return ( 
    <div>
        <Addtodo addTodo={addTodo} />
        <Todos toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos} />
    </div>
  );
})


export default Todolist;