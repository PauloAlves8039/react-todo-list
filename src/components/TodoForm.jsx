import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value || !category) {
      return;
    }
    
    addTodo(value, category);

    setValue("");
    setCategory("");
  }
  
  return (
    <div className="todo-form">
        <h2 class="title-color">
          <i class="fa-solid fa-square-plus"></i>
          <span class="title">Create Task</span>
        </h2>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title" value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Trabalho">Work</option>
                <option value="Pessoal">Personal</option>
                <option value="Estudos">Studies</option>
            </select>

            <button type="submit" title="Create">
              <i class="fa-solid fa-plus"></i>
              <span class="title">Create</span>
            </button>
        </form>

    </div>
  )
};

export default TodoForm;