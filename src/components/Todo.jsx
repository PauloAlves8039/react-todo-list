import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}} >
        <div className="content">
            <p>{todo.text}</p>
        </div>
        <div className="category">
            <p>({todo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={() => completeTodo(todo.id)} title="Complete">
              <i class="fa-solid fa-check"></i>
              <span class="title">Complete</span>
            </button>
            <button className="remove" onClick={() => removeTodo(todo.id)} title="Delete">
              <i class="fa-solid fa-check"></i>
              <span class="title">Delete</span>
            </button>
        </div>
    </div>
  );
};

export default Todo