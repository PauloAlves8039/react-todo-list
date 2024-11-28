import React from 'react'

const TodoForm = () => {
  return (
    <div className="todo-form">
        <h2>Create Task</h2>

        <form>
            <input type="text" placeholder="Digite o título" />
            <select>
                <option value="">Select a category</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>

            <button type="submit">Create task</button>
        </form>

    </div>
  )
};

export default TodoForm