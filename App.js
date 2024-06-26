import './app.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo(''); // Clear input after adding todo
    }
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = toDos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = toDos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(todo.id)}
                type="checkbox"
                checked={todo.status}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteTodo(todo.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="completed">
        {toDos.filter((todo) => todo.status).map((completedTodo) => (
          <h1 key={completedTodo.id} className="completedItem">{completedTodo.text}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
