import React, { memo, useRef } from "react";

let idSeq = 0;
const Addtodo= memo(function Addtodo(props) {
    const { addTodo } = props;
    const inputRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const newText = inputRef.current.value.trim();
        if(newText.length>0){
            addTodo({
                id: ++idSeq,
                text: newText,
                complete:false,
            })
        }
        inputRef.current.value = '';
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
             <input type="text" 
                    className="new-todo" 
                    placeholder="what needs td be done?" 
                    ref={inputRef}
             />
        </form>
    </div>
  );
})


export default Addtodo;