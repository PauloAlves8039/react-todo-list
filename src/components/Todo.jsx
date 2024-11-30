import React from 'react'

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
        </div>
        <div className="category">
            <p>({todo.category})</p>
        </div>
        <div>
            <button className="complete">Complete</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  );
};

export default Todo