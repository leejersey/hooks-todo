import React, { memo } from "react";

const TodoItem =  memo(function TodoItem (props) {
    const { todo: {
        id,
        text,
        complete
    } , removeTodo, toggleTodo} = props
    const  onChange =() => {
       toggleTodo(id);
    }

    const onRemove = () => {
        removeTodo(id);
    }
    return (
        <li className="todo-item">
            <input type="checkbox" onChange={onChange} checked={complete}/>
            <label className={complete ? 'complete': ''}>{text}</label>
            <button onClick={onRemove}>删除</button>
        </li>
    )
})

export default TodoItem