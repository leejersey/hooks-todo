import React, { memo } from "react";
import TodoItem from './Todoitem';

const Todos = memo(function Todos(props) {
    const { todos , removeTodo, toggleTodo} = props;
  return (
    <ul>
        {
            todos.map(todo => {
                return (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                 />
                )
            })
        }
    </ul>
  );
})


export default Todos;