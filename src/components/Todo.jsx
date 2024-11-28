import React from 'react'

const Todo = ({ todo }) => {
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
            <button className="remove">X</button>
        </div>
    </div>
  );
};

export default Todo