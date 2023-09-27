import './App.css';
import TodoList from './TodoList';

const App = () => {

  return (
    <div className="App">
    <header>
      <h1>Simple Todolist</h1>
    </header>
    <main>
      <TodoList />
    </main>
    </div>
  );
};

export default App;