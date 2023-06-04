import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <table>
        <tr><input style={{display:'inline'}} onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p style={{display:'inline', padding:'3px' }} onClick={() => toggleComplete(todo)}>
          {todo.text}
        </p> </tr>
        <tr>
          <button
            onClick={() => deleteTodo(todo.id)}>Delete</button>
          </tr>

    </table>
  );
};

export default Todo;