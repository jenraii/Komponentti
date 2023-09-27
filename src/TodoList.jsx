import { useState } from 'react';
import './TodoList.css';
import TodoTable from './TodoTable';

const TodoList = () => {
  const [todo, setTodo] = useState({date: '', description: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    setTodo({...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ date: '', description: '' });
  }

  const deleteTodo = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          <label>Date:
            <input type="text" name="date" onChange={inputChanged} value={todo.date} />
          </label>
          <label>Description:
            <input type="text" name="description" onChange={inputChanged} value={todo.description} />
          </label>
          <input type="submit" value="Add" />
        </fieldset>
      </form>

    <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoList;